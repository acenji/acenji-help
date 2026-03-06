# 3D Viewer

The **3D Viewer** element displays interactive 3D models (`.glb` / `.gltf` files) using Google's model-viewer. Users can orbit, zoom, and pan around the model. Optionally supports AR on mobile devices.

---

## Adding a 3D Viewer

1. Open the **Website Builder** and select a page
2. Find **3D Viewer** in the **Display** category of the Elements Panel
3. Drag it onto your page
4. Configure the model URL in the **Floating Design Panel**

---

## Properties

### General Tab

| Property | Description |
|----------|-------------|
| **Data Source** | `Static` (manual URL) or `From Element` (data binding) |
| **Model URL** | URL to a `.glb` or `.gltf` 3D model file |
| **Poster Image** | Static image displayed while the model loads |
| **Viewer Height** | Height of the viewer in pixels (100 - 1000) |
| **Background Color** | Background color behind the model |
| **Auto Rotate** | Continuously rotate the model |
| **Camera Controls** | Allow orbit, zoom, and pan interactions |
| **AR Enabled** | Enable augmented reality on supported devices |
| **Exposure** | Lighting exposure level (0.1 - 2.0) |
| **Shadow Intensity** | Ground shadow darkness (0 - 1) |

### Data Source (From Element)

When using data binding, map the model URL field from a connected element:

| Field | Description |
|-------|-------------|
| **Model URL Field** | Field containing the 3D model URL |

### Color Tab

Customize the container background and border colors.

### Dimensions Tab

Adjust padding, margin, border radius, and size.

---

## Supported Formats

The 3D Viewer supports:
- **glTF** (`.gltf`) — Open standard 3D format
- **GLB** (`.glb`) — Binary version of glTF (recommended for smaller file size)

---

## AR Mode

When **AR Enabled** is checked and the user views the app on a supported device (iOS Safari, Android Chrome), they can tap an AR button to place the 3D model in their real-world environment.

---

## Use Cases

- **Product Showcase**: Interactive 3D product views for e-commerce
- **Architecture**: Display building or room models
- **Education**: Explore anatomical, scientific, or historical 3D models
- **Manufacturing**: View parts and assemblies from all angles

---

<div style="display: flex; justify-content: space-between; margin-top: 40px;">
  <a href="../deep-link/index">Previous: Deep Link</a>
  <a href="../../index">Back to Elements</a>
</div>
