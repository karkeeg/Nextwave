const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running post-build optimization...');

const distPath = path.join(__dirname, '..', 'dist');

// Function to minify HTML files
function minifyHTML() {
  try {
    // Find all HTML files in the dist directory
    const files = fs.readdirSync(distPath).filter(file => file.endsWith('.html'));
    
    files.forEach(file => {
      const filePath = path.join(distPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Basic HTML minification (remove comments, extra whitespace, etc.)
      content = content
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove CSS/JS comments
        .replace(/<!--[\s\S]*?-->/g, '')    // Remove HTML comments
        .replace(/\s+/g, ' ')               // Collapse whitespace
        .replace(/>\s+</g, '><')             // Remove whitespace between tags
        .trim();
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Minified: ${file}`);
    });
  } catch (error) {
    console.error('Error minifying HTML:', error);
  }
}

// Function to optimize images
function optimizeImages() {
  try {
    // Check if ImageMagick is installed
    try {
      execSync('magick --version');
      console.log('ImageMagick found, optimizing images...');
      
      // Optimize all images in the dist directory
      execSync(`magick mogrify -strip -interlace Plane -gaussian-blur 0.05 -quality 85% ${path.join(distPath, '**/*.{jpg,jpeg,png}')}`, { stdio: 'inherit' });
    } catch (e) {
      console.warn('ImageMagick not found, skipping image optimization');
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Run all optimizations
function runOptimizations() {
  minifyHTML();
  optimizeImages();
  console.log('Post-build optimizations complete!');
}

runOptimizations();
