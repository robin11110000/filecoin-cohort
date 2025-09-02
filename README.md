# FileSocial 🚀

**Verified Content Social Platform built on Filecoin Onchain Cloud**

> A decentralized social media platform that guarantees content permanence, creator monetization, and content authenticity through cryptographic verification.

## 🌟 What is FileSocial?

FileSocial transforms traditional social media by leveraging Filecoin's programmable storage infrastructure. Unlike platforms where content can disappear, every post on FileSocial comes with:

- ✅ **Storage Guarantees**: Content stored with cryptographic proof and SLA guarantees
- ✅ **Content Verification**: PDP (Proof of Data Possession) ensures authenticity
- ✅ **Creator Monetization**: Streaming payments, subscriptions, and verified tipping
- ✅ **Lightning Fast Delivery**: FilCDN for instant content loading
- ✅ **True Ownership**: Users control their data and creators own their content

## 🏗️ Architecture

FileSocial integrates all four Filecoin Onchain Cloud services:

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │  Smart Contracts │    │ Filecoin Cloud  │
│                 │    │                  │    │                 │
│ • React + TS    │◄──►│ • SocialContract │◄──►│ • WarmStorage   │
│ • Synapse SDK   │    │ • PaymentContract│    │ • FilecoinPay   │
│ • RainbowKit    │    │ • NFTContract    │    │ • FilCDN        │
│ • Web3 Wallet   │    │                  │    │ • PDP Contracts │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn
- MetaMask or compatible Web3 wallet
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/FileSocial.git
cd FileSocial
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PRIVATE_KEY=your_wallet_private_key_here
INFURA_API_KEY=your_infura_key
PINATA_API_KEY=your_pinata_key
PINATA_SECRET_KEY=your_pinata_secret
```

4. **Compile contracts**
```bash
npx hardhat compile
```

5. **Run tests**
```bash
npx hardhat test
```

6. **Deploy to testnet**
```bash
# Deploy to Filecoin Wallaby testnet
npx hardhat run scripts/deploy.js --network wallaby

# Deploy to Calibration testnet
npx hardhat run scripts/deploy.js --network calibration
```

## 🧪 Testing

### Run All Tests
```bash
npm test
# or
npx hardhat test
```

### Run Specific Test Suites
```bash
# Test social media functionality
npx hardhat test test/SocialContract.test.js

# Test Filecoin integration
npx hardhat test test/FilecoinIntegration.test.js

# Test payment functionality
npx hardhat test test/PaymentContract.test.js
```

### Test Coverage
```bash
npx hardhat coverage
```

## 📁 Project Structure

```
FileSocial/
├── contracts/
│   ├── SocialContract.sol      # Main social media logic
│   ├── PaymentContract.sol     # FilecoinPay integration
│   ├── NFTCollection.sol       # Premium content NFTs
│   └── interfaces/             # Contract interfaces
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # App pages
│   │   ├── hooks/              # Custom React hooks
│   │   └── utils/              # Helper functions
│   └── public/                 # Static assets
├── scripts/
│   ├── deploy.js               # Deployment script
│   ├── contractDeployment.js   # Contract deployment
│   └── verify.js               # Contract verification
├── test/
│   ├── SocialContract.test.js  # Social media tests
│   └── FilecoinIntegration.test.js # Filecoin service tests
└── hardhat.config.js           # Hardhat configuration
```

## 🔧 Configuration

### Network Configuration

The project is configured for multiple Filecoin networks:

```javascript
// hardhat.config.js
networks: {
  wallaby: {
    url: "https://wallaby.node.glif.io/rpc/v0",
    accounts: [process.env.PRIVATE_KEY],
    chainId: 31415
  },
  calibration: {
    url: "https://api.calibration.node.glif.io/rpc/v1",
    accounts: [process.env.PRIVATE_KEY],
    chainId: 314159
  },
  mainnet: {
    url: "https://api.node.glif.io/rpc/v1",
    accounts: [process.env.PRIVATE_KEY],
    chainId: 314
  }
}
```

## 📚 Smart Contracts

### Core Contracts

#### SocialContract.sol
Main social media functionality with Filecoin integration:
- **Post Creation**: With warm storage and PDP verification
- **Interactions**: Like, comment, share with reward mechanisms
- **Content Management**: Edit, delete with storage tracking

#### PaymentContract.sol
FilecoinPay integration for monetization:
- **Streaming Payments**: Monthly creator subscriptions
- **Micro-tipping**: Instant FIL tips with low fees
- **Premium Content**: Pay-per-view with access control

#### NFTCollection.sol
Premium content as collectible NFTs:
- **Content Minting**: Transform posts into tradeable NFTs
- **Royalty Management**: Creator earnings from secondary sales
- **Metadata Storage**: IPFS + Filecoin dual storage


## 🎨 Frontend

### Technology Stack
- **React 18**: Modern UI framework
- **TypeScript**: Type-safe development
- **Synapse SDK**: Filecoin service integration
- **RainbowKit**: Wallet connection management
- **Tailwind CSS**: Utility-first styling

### Key Features
- **Content Upload**: Drag-and-drop with Filecoin storage
- **Storage Dashboard**: Monitor storage status and costs
- **Creator Analytics**: Earnings, engagement, storage metrics
- **Wallet Integration**: Multi-wallet support with network switching

### Development Server
```bash
cd frontend
npm start
# App runs on http://localhost:3000
```

## 🔐 Security

### Smart Contract Security
- **OpenZeppelin**: Battle-tested contract templates
- **Access Control**: Role-based permissions
- **Reentrancy Guards**: Protection against attacks
- **Input Validation**: Comprehensive parameter checking

### Best Practices
- Private keys never stored in code
- Environment variables for sensitive data
- Regular security audits and testing
- Multi-signature wallet for contract ownership

## 📖 API Documentation

### Smart Contract Methods

#### Post Management
```solidity
// Create a new post with Filecoin storage
function createPost(string memory _postHash, uint256 _storageDuration) external

// Get all posts with verification status
function fetchPosts() external view returns (Post[] memory)

// Verify post storage with PDP proof
function verifyPostStorage(uint256 postId, bytes calldata proof) external
```

#### Payment Functions
```solidity
// Tip a post creator
function tipPost(uint256 postId, uint256 amount) external

// Subscribe to creator with streaming payment
function subscribeToCreator(address creator, uint256 duration) external payable

// Purchase premium content access
function purchasePremiumAccess(uint256 postId) external payable
```

### Frontend SDK Usage
```typescript
import { SynapseSDK } from '@synapse/sdk';

// Initialize Filecoin services
const synapse = new SynapseSDK({
  network: 'wallaby',
  apiKey: process.env.REACT_APP_SYNAPSE_API_KEY
});

// Upload content with verification
const uploadContent = async (file: File) => {
  const result = await synapse.warmStorage.upload(file, {
    duration: '1 year',
    replicas: 3,
    retrievalGuarantee: true
  });
  return result;
};
```

## 🎯 Roadmap

### Phase 1: Core Platform (Current)
- ✅ Smart contract development
- ✅ Filecoin service integration
- ✅ Basic frontend interface
- ⏳ Testing and deployment

### Phase 2: Enhanced Features
- 🔲 Mobile responsive design
- 🔲 Advanced creator tools
- 🔲 Community features
- 🔲 Content moderation system

### Phase 3: Ecosystem Expansion
- 🔲 Cross-platform integration
- 🔲 Creator economy expansion
- 🔲 DAO governance
- 🔲 Multi-chain support

## 🏆 Achievements

- **Filecoin Onchain Cloud WaveHack Participant**
- **Complete Integration**: All 4 Filecoin services implemented
- **Production Ready**: Built for real users, not just demo
- **Open Source**: GPL v3 licensed for community development



**Built with ❤️ for the decentralized web**

*Transform social media. Own your content. Verify authenticity. Monetize creativity.*
