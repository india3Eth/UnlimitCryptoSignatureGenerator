<div align="center">

# 🔐 UNLIMIT Crypto Signature Generator

### ✨ Interactive HMAC-SHA256 Signature Generator with Visual Flow ✨

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge&logo=github-actions)](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**🚀 Generate HMAC-SHA256 signatures for Unlimit API endpoints with interactive step-by-step visualization! 🚀**

[🎮 Live Demo](#) • [📖 Documentation](#usage) • [🐛 Report Bug](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator/issues) • [✨ Request Feature](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator/issues)

</div>

---

## 📸 Screenshots & Demo

### 🎯 **Main Interface**
> 🖼️ *Screenshot placeholder: Main application interface showing the signature generator form*
<!-- 
Add screenshot here showing:
- API type selector
- Endpoint dropdown
- Secret input field
- Generate button
- Brutalist design theme
-->

### ⚡ **Interactive Flow Visualization**
> 🎬 *GIF placeholder: Animated demonstration of the signature generation flow*
<!-- 
Add GIF here showing:
- Step-by-step flow animation
- Real-time data updates
- Active step highlighting
- Final signature generation
-->

### 📱 **Mobile Responsive Design**
> 📱 *Screenshots placeholder: Mobile and tablet views*
<!-- 
Add screenshots showing:
- Mobile layout
- Tablet layout
- Touch-friendly interactions
-->

---

## ✨ Features

### 🎨 **Interactive UI**
- 🎭 **Brutalist Design** - Bold, functional aesthetic that makes crypto feel approachable
- 🌈 **Colorful Step Indicators** - Each step has its own vibrant color theme
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - See your signature generation process in real-time

### 🔄 **Signature Flow Visualization**
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ 🔑 INPUT    │───▶│ 🔧 PATH     │───▶│ ➕ CONCAT   │───▶│ 🔐 HMAC     │───▶│ ✅ RESULT   │
│ Collection  │    │ Construction│    │ Data        │    │ SHA-256     │    │ Signature   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

- **Step 1**: 🔑 **Input Collection** - Gather method, path, and secret key
- **Step 2**: 🔧 **Path Construction** - Substitute parameters in API paths
- **Step 3**: ➕ **Data Concatenation** - Combine HTTP method + final path
- **Step 4**: 🔐 **HMAC-SHA256** - Generate cryptographic hash
- **Step 5**: ✅ **Result** - Display final hex-encoded signature

### 🛡️ **Security & Validation**
- 🔒 **Secret Key Protection** - Masked input with validation
- ✅ **Input Validation** - Real-time validation with helpful error messages
- 🛡️ **Error Boundaries** - Graceful error handling and recovery
- 🔍 **Parameter Validation** - Ensure all required path parameters are provided

### 🚀 **Developer Experience**
- 📋 **One-Click Copy** - Copy signatures to clipboard instantly
- 🎯 **API Endpoint Support** - Pre-configured for Unlimit API endpoints
- 🔄 **Live Updates** - Watch the signature generation process happen
- 📚 **Educational** - Learn how HMAC-SHA256 signatures work

### 🏗️ **Technical Excellence**
- ⚡ **Performance Optimized** - React.memo, useCallback, useMemo optimizations
- 🔧 **Modular Architecture** - Clean, maintainable component structure
- 📱 **Modern Stack** - React 18, TypeScript, Vite, TailwindCSS
- 🎨 **Accessible Design** - WCAG compliant interface

---

## 🚀 Quick Start

### 📋 **Prerequisites**

Make sure you have these installed:

- 📦 **Node.js** `>=18.0.0` [![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
- 📦 **npm** `>=8.0.0` [![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

### ⚡ **Installation**

```bash
# 📥 Clone the repository
git clone https://github.com/india3Eth/UnlimitCryptoSignatureGenerator.git

# 📁 Navigate to project directory
cd UnlimitCryptoSignatureGenerator

# 📦 Install dependencies
npm install

# 🚀 Start development server
npm run dev

# 🎉 Open http://localhost:5173 in your browser!
```

### 🏗️ **Build for Production**

```bash
# 🔨 Create production build
npm run build

# 👀 Preview production build
npm run preview

# 🧹 Lint code
npm run lint
```

---

## 🏗️ Architecture Overview

### 📂 **Project Structure**
```
src/
├── 🎨 components/
│   ├── 🔐 signature/          # Signature generation components
│   │   ├── Header.tsx         # App header with branding
│   │   ├── SecretInput.tsx    # Secure secret key input
│   │   ├── ApiTypeSelector.tsx# API type selection
│   │   ├── EndpointSelector.tsx# Endpoint dropdown
│   │   ├── EndpointDetails.tsx# Selected endpoint info
│   │   ├── PathParameterInputs.tsx# Dynamic parameter inputs
│   │   ├── GenerateButton.tsx # Signature generation trigger
│   │   ├── SignatureDisplay.tsx# Result display with copy
│   │   ├── SignatureFlowGraph.tsx# Visual flow diagram
│   │   ├── FlowStep.tsx       # Individual flow step
│   │   └── FlowConnector.tsx  # Arrow connectors
│   ├── 🛡️ common/            # Shared components
│   │   └── ErrorBoundary.tsx  # Error handling
│   └── 🎛️ ui/                # Base UI components
├── 🔧 hooks/                  # Custom React hooks
│   └── useSignatureGenerator.ts# Main signature logic
├── 📊 data/                   # Static data
│   └── apiEndpoints.ts        # API endpoint definitions
├── 🔐 services/              # Business logic
│   └── signatureService.ts   # HMAC-SHA256 generation
├── 📝 types/                 # TypeScript definitions
│   └── api.ts                # API-related types
└── 🛠️ utils/                 # Utility functions
    └── validation.ts         # Input validation
```

### 🔄 **Data Flow**
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   User      │───▶│   React     │───▶│  Crypto-JS  │───▶│   Display   │
│   Input     │    │   Hooks     │    │   HMAC      │    │   Result    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       ▲                   │                   │                   │
       │                   ▼                   ▼                   ▼
       │            ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
       └────────────│  Validation │    │ Signature   │    │  Clipboard  │
                    │   Service   │    │  Service    │    │   Copy      │
                    └─────────────┘    └─────────────┘    └─────────────┘
```

### 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | UI Framework | `^18.3.1` |
| 📘 **TypeScript** | Type Safety | `~5.6.2` |
| ⚡ **Vite** | Build Tool | `^6.0.5` |
| 🎨 **TailwindCSS** | Styling | `^3.4.1` |
| 🔐 **Crypto-JS** | HMAC Generation | `^4.2.0` |
| 🎛️ **Radix UI** | Accessible Components | `^2.0.0` |
| 🎭 **Lucide React** | Icons | `^0.474.0` |

---

## 📖 Usage

### 🎯 **Basic Usage**

1. **🔑 Enter Your Secret Key**
   ```
   Enter your API secret key in the password field
   ⚠️ Keep this secure! It's used for cryptographic signing
   ```

2. **📡 Select API Type**
   - 🟢 **Normal API** - Standard Unlimit API endpoints
   - 🟣 **White Label API** - White label specific endpoints

3. **🎯 Choose API Endpoint**
   ```
   Select from pre-configured endpoints like:
   • Onramp - Config
   • Onramp - Orders
   • White Label - Create KYC customer
   • And many more...
   ```

4. **⚙️ Fill Path Parameters** (if required)
   ```
   Some endpoints need parameters like:
   • orderId: "12345"
   • customerId: "cust_abc123"
   • transactionId: "txn_xyz789"
   ```

5. **🚀 Generate Signature**
   ```
   Click the "GENERATE SIGNATURE" button and watch the
   step-by-step visualization show how your signature is created!
   ```

6. **📋 Copy & Use**
   ```
   Copy the generated signature to your clipboard and use it
   in your API requests
   ```

### 🔍 **Example API Call**

Once you have your signature, use it in your API requests:

```javascript
const signature = "a1b2c3d4e5f6..."; // Generated signature

const response = await fetch('https://api.unlimit.com/onramp/v1/orders', {
  method: 'GET',
  headers: {
    'X-Signature': signature,
    'Content-Type': 'application/json'
  }
});
```

### 🛠️ **Advanced Configuration**

#### 🔧 **Adding Custom Endpoints**

Edit `src/data/apiEndpoints.ts` to add new endpoints:

```typescript
export const apiEndpoints: ApiEndpoint[] = [
  // ... existing endpoints
  {
    name: "Custom - My Endpoint",
    path: "/api/v1/custom/{id}",
    method: "POST",
    pathParams: ["id"],
    type: "normal",
  }
];
```

#### 🎨 **Customizing Colors**

Modify colors in the flow steps by editing `SignatureFlowGraph.tsx`:

```typescript
const steps = [
  {
    title: "My Step",
    bgColor: "#YOUR_COLOR", // Custom hex color
    // ... other properties
  }
];
```

---

## 🧪 Development

### 🔧 **Development Commands**

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👀 Preview production build |
| `npm run lint` | 🧹 Lint code with ESLint |

### 🧪 **Testing the Signature Generation**

Test with these example values:

```
🔑 Secret: "test_secret_key_123"
📡 API Type: "Normal API"
🎯 Endpoint: "Onramp - Order Status by ID"
📝 orderId: "order_12345"

Expected Method + Path: "GET/onramp/v1/orders/order_12345"
```

### 🐛 **Debugging**

1. **Flow Not Updating?**
   - Check browser console for errors
   - Verify all required parameters are filled
   - Ensure secret key meets validation requirements

2. **Signature Generation Fails?**
   - Verify internet connection
   - Check that all path parameters are provided
   - Ensure secret key is not empty

3. **Build Issues?**
   - Run `npm run lint` to check for code issues
   - Verify all TypeScript types are correct
   - Check for missing dependencies

---

## 🤝 Contributing

We love contributions! 🎉 Here's how to get started:

### 🚀 **Quick Contribution Guide**

1. **🍴 Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **📥 Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/UnlimitCryptoSignatureGenerator.git
   cd UnlimitCryptoSignatureGenerator
   ```

3. **🌿 Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

4. **💻 Make Your Changes**
   ```bash
   # Write awesome code
   # Add tests if applicable
   # Update documentation
   ```

5. **✅ Test Your Changes**
   ```bash
   npm run build  # Ensure it builds
   npm run lint   # Check code style
   ```

6. **📤 Commit & Push**
   ```bash
   git add .
   git commit -m "feat: Add amazing new feature"
   git push origin feature/amazing-new-feature
   ```

7. **🔄 Create Pull Request**
   ```
   Open a PR on GitHub with:
   • Clear description of changes
   • Screenshots if UI changes
   • Test instructions
   ```

### 📝 **Commit Message Format**

```
type(scope): description

feat: Add new feature
fix: Fix bug in component
docs: Update README
style: Format code
refactor: Improve code structure
test: Add tests
chore: Update dependencies
```

### 🎯 **Areas for Contribution**

- 🔧 **New API Endpoints** - Add more Unlimit API endpoints
- 🎨 **UI Improvements** - Enhance the visual design
- 📱 **Mobile Experience** - Improve mobile responsiveness
- 🧪 **Testing** - Add unit and integration tests
- 📚 **Documentation** - Improve guides and examples
- 🌐 **Internationalization** - Add multi-language support
- ⚡ **Performance** - Optimize load times and animations

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use, modify, and distribute! 🎉
```

---

## 🙏 Acknowledgments

- 🎨 **Design Inspiration** - Brutalist web design movement
- 🔐 **Crypto-JS** - For reliable HMAC-SHA256 implementation
- ⚛️ **React Team** - For the amazing framework
- 🎛️ **Radix UI** - For accessible component primitives
- 🌟 **Unlimit** - For the comprehensive API ecosystem

---

## 📞 Support & Contact

### 🆘 **Need Help?**

- 📖 **Documentation** - Check this README first
- 🐛 **Bug Reports** - [Open an issue](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator/issues)
- 💡 **Feature Requests** - [Request a feature](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator/issues)
- 💬 **Discussions** - [Join the conversation](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator/discussions)

### 👨‍💻 **Maintainer**

**[@india3Eth](https://github.com/india3Eth)**
- 📧 Email: rutvijpatel414@gmail.com
- 🐙 GitHub: [@india3Eth](https://github.com/india3Eth)

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!** 🌟

Made with ❤️ by **[@india3Eth](https://github.com/india3Eth)**

**🚀 Happy Signature Generating! 🔐**

[![Star on GitHub](https://img.shields.io/github/stars/india3Eth/UnlimitCryptoSignatureGenerator?style=social)](https://github.com/india3Eth/UnlimitCryptoSignatureGenerator/stargazers)
[![Follow on GitHub](https://img.shields.io/github/followers/india3Eth?style=social)](https://github.com/india3Eth)

</div>

---