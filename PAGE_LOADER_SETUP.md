# Page Loader Setup Guide

## Overview
The page loader preloads all critical assets before displaying the page content, ensuring a smooth user experience with no flash of unstyled content or missing images.

## 🎯 How It Works

1. **PageLoader Component** (`src/app/eagle/page-loader.tsx`)
   - Displays a GIF animation while assets load
   - Shows real-time progress bar and percentage
   - Fades out smoothly when loading completes

2. **ClientLayout Component** (`src/components/ClientLayout.tsx`)
   - Wraps the entire application in the root layout
   - Manages loading state
   - Controls which assets to preload

3. **Asset Configuration** (`src/config/preloadAssets.ts`)
   - Centralized configuration for all assets
   - Easy to add/remove assets
   - Multiple helper functions for different loading strategies

## 📁 Required: Add Your Loader GIF

**Place your loader GIF file at:**
```
/public/assets/loader/eagle-loader.gif
```

The directory has been created for you. Just add your GIF file!

### If using a different GIF name or path:
Edit `src/app/eagle/page-loader.tsx` line 75:
```typescript
src="/assets/loader/your-custom-name.gif"
```

## ⚙️ Configuration

### Adding New Assets to Preload

Edit `src/config/preloadAssets.ts`:

```typescript
export const preloadAssets = {
  // Add new category
  myNewSection: [
    "/assets/my-image.png",
    "/assets/my-animation.gif",
  ],

  // ... existing categories
};
```

### Choosing Loading Strategy

In `src/components/ClientLayout.tsx` (line 16), you can choose:

**Option 1: Load ALL assets** (recommended for better UX)
```typescript
const assetsToLoad = getAllAssets();
```
- Preloads everything upfront
- Slower initial load (~2-3 seconds)
- Smoother page navigation (no loading delays)

**Option 2: Load CRITICAL assets only** (faster initial load)
```typescript
const assetsToLoad = getCriticalAssets();
```
- Only preloads essential assets (logos, loader)
- Faster initial load (~1 second)
- Other assets load on-demand

## 🎨 Customization

### Change Loading Duration
Edit `src/app/eagle/page-loader.tsx` line 17:
```typescript
const minimumLoadTime = 1500; // milliseconds
```

### Change Loader Appearance
Edit `src/app/eagle/page-loader.tsx`:
- **GIF size**: Line 74 (`w-[200px] h-[200px]`)
- **Colors**: Lines 69, 90, 93 (gradient colors)
- **Text**: Line 84 ("Loading EAGLE")

### Change Background Color
Edit `src/app/eagle/page-loader.tsx` line 64:
```typescript
<div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
```
Change `bg-white` to any color you prefer.

## 🐛 Troubleshooting

### Assets Not Loading
1. Check browser console for errors
2. Verify asset paths in `src/config/preloadAssets.ts`
3. Make sure files exist in `/public` directory

### Loader Stuck at 0%
- The loader GIF might not exist at the specified path
- Check console for warnings about failed asset loads

### Page Flashes Before Loader
- Make sure `ClientLayout` wraps all content in `layout.tsx`
- The loader has `z-50` to appear above all content

## 📊 Performance Tips

1. **Optimize Images**: Compress images before adding to preload list
2. **Use WebP**: Convert large images to WebP format for faster loading
3. **Critical Only**: For very large sites, use `getCriticalAssets()` instead of `getAllAssets()`
4. **Lazy Load**: Don't preload below-the-fold content that users might not see

## 🔧 Advanced Usage

### Preload Specific Categories Only
```typescript
import { getAssetsByCategory } from "@/config/preloadAssets";

const assetsToLoad = getAssetsByCategory("loader", "branding", "eagleFeatures");
```

### Dynamic Asset Loading Based on Route
```typescript
import { usePathname } from "next/navigation";

const pathname = usePathname();
const assetsToLoad = pathname.includes("/eagle")
  ? getAssetsByCategory("loader", "branding", "eagleFeatures")
  : getCriticalAssets();
```

## 📝 Notes

- The page loader only shows on initial page load
- Subsequent navigation (client-side) won't show the loader
- The loader ensures minimum 1.5 seconds display time for better UX
- Progress bar shows actual loading progress of assets
