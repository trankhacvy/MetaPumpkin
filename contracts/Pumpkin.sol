// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Pumpkin is ERC721URIStorage, Ownable {
    event MintPumpkin (address indexed minter, uint256 startWith, uint256 times);
    
    uint256 public constant MAX_PUMPKINS = 147;
    uint256 public constant MAX_BATCH = 10; 
    
    uint256 public totalPumpkins;
    uint256 public price = 31000000000000000; // 0.031 BNB
    string public baseURI;
    bool public started = true;
    
    constructor(string memory baseURI_) ERC721("Meta Pumpkins", "MPUM") {
        baseURI = baseURI_;
    }

    modifier mintEnabled() {
        require(started, "not started");
        _;
    }
 
    function totalSupply() public view virtual returns (uint256) {
        return totalPumpkins;
    }
 
    function _baseURI() internal view virtual override returns (string memory){
        return baseURI;
    }
 
    function setBaseURI(string memory _newURI) public onlyOwner {
        baseURI = _newURI;
    }
 
    function changePrice(uint256 _newPrice) public {
        price = _newPrice;
    }
 
    function setTokenURI(uint256 _tokenId, string memory _tokenURI) public onlyOwner {
        _setTokenURI(_tokenId, _tokenURI);
    }
 
    function setStart(bool _start) public onlyOwner {
        started = _start;
    }
 
    function mintPumpkin(uint256 _times) payable public mintEnabled {
        require(_times >0 && _times <= MAX_BATCH, "Mint wrong number");
        require(totalPumpkins + _times <= MAX_PUMPKINS, "Purchase would exceed max supply of Pumpkins");
        require(msg.value == _times * price, "BNB value sent is not correct");
        payable(owner()).transfer(msg.value);
        emit MintPumpkin(_msgSender(), totalPumpkins+1, _times);
        for(uint256 i=0; i< _times; i++){
            _mint(_msgSender(), 1 + totalPumpkins++);
        }
    } 

     function adminMint(uint256 _times) payable public onlyOwner {
        require(_times >0 && _times <= MAX_BATCH, "Mint wrong number");
        require(totalPumpkins + _times <= MAX_PUMPKINS, "Purchase would exceed max supply of Pumpkins");
        require(msg.value == _times * price, "BNB value sent is not correct");
        payable(owner()).transfer(msg.value);
        emit MintPumpkin(_msgSender(), totalPumpkins+1, _times);
        for(uint256 i=0; i< _times; i++){
            _mint(_msgSender(), 1 + totalPumpkins++);
        }
    }

    function adminMintGiveaways(address _address) public onlyOwner {
        require(totalPumpkins + 1 <= MAX_PUMPKINS, "Purchase would exceed max supply of Pumpkins");
        emit MintPumpkin(_address, totalPumpkins+1, 1);
        _mint(_address, 1 + totalPumpkins++);
    } 

}