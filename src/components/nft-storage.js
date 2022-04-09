import { NFTStorage } from "nft.storage";
import loginCall from "./login-call";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJiNTg5NUJiMmJiY2Y2OTA3MzlDMUJDQjQ1NzQ1M2IxQmY0Q0MyMzciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODk5NTA4MjgwOSwibmFtZSI6Ik5GVF9TVE9SQUdFX0FQSV9LRVkifQ.Da3Zh8nxAlH3OqmF5BZPOisjVA3ff081APc0Avg5BUg";

class NFTStorageUtil {
  // For example's sake, we'll fetch an image from an HTTP URL.
  // In most cases, you'll want to use files provided by a user instead.
  async getExampleImage() {
    const imageOriginUrl =
      "https://user-images.githubusercontent.com/87873179/144324736-3f09a98e-f5aa-4199-a874-13583bf31951.jpg";
    const r = await fetch(imageOriginUrl, {
      mode: "no-cors",
      method: "GET",
    });
    // if (!r.ok) {
    //   throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`);
    // }
    return r.blob();
  }

  async storeExampleNFT(input) {
    const image = await this.getExampleImage();
    //const image = new Blob();
    const nft = {
      image, // use image Blob as `image` field
      name: input.orgName,
      description: input.desc,
      properties: {
        type: "POSP",
        origins: {
          recepientAddress: input.recp,
          linkArt: input.art,
        },
        authors: [{ recepientMail: input.email }],
        content: {
          "Stream of Work": input.work,
        },
      },
    };

    const client = new NFTStorage({ token: API_KEY });
    const metadata = await client.store(nft);

    console.log("NFT data stored!");
    const metadataLink = `https://ipfs.io/ipfs/${metadata.url.slice(7)}`;
    console.log("Metadata URI: ", metadataLink);

    await loginCall.mintNFT(input.amount, metadataLink);
    console.log("Contract Function Call mint Successfull");
  }

  //   render() {
  //     return (
  //       <div>
  //         <button
  //           id="btn-ready"
  //           onClick={() => {
  //             this.storeExampleNFT();
  //           }}
  //         >
  //           Ready
  //         </button>
  //       </div>
  // );
  //   }
}

const nftStorageUtil = new NFTStorageUtil();
export default nftStorageUtil;
