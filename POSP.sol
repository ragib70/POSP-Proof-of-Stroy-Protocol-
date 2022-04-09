// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract POSP is ERC1155, Ownable {

        bool public isPublicMintEnabled;
        mapping(uint256 => string) private _uris;
        using Counters for Counters.Counter;

        Counters.Counter private _tokenIds;

        constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmXMvBcCmcWf9ATm6nL23gKKLpLtB128GzT7QCxM3HuoP8/{id}.json"){
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner{
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function getURI(uint256 tokenId) public view returns (string memory) {
        return _uris[tokenId];
    }

    function mint(uint256 amount, string memory _metadata)
        public
        returns(uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _uris[newItemId] = _metadata;
        _mint(msg.sender, newItemId, amount, "");
        _tokenIds.increment();
        return newItemId;
    }

    function sendtoReciepient(address recepient, uint256 id, bytes memory _metadata) //We probably don't need this; can directly call safe transferfrom
        public
    {
    safeTransferFrom (msg.sender, recepient, id, 1, _metadata);// doubt, do we need to send _metadata?
    }
}