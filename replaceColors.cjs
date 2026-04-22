const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Blue replacements to Gray/Black
  content = content.replace(/bg-[#F5F6FC]/g, 'bg-[#F5F6FC]'); // keep base bg
  
  content = content.replace(/text-blue-600/g, 'text-gray-900');
  content = content.replace(/text-blue-700/g, 'text-gray-900');
  
  content = content.replace(/bg-blue-600/g, 'bg-gray-900');
  content = content.replace(/hover:bg-blue-700/g, 'hover:bg-black');
  content = content.replace(/hover:text-blue-600/g, 'hover:text-black');
  content = content.replace(/hover:text-blue-700/g, 'hover:text-black');
  
  content = content.replace(/bg-blue-500\/5/g, 'bg-gray-500/5');
  content = content.replace(/bg-blue-500\/10/g, 'bg-gray-500/10');
  content = content.replace(/bg-blue-500/g, 'bg-gray-500');
  
  content = content.replace(/bg-blue-50/g, 'bg-gray-100');
  content = content.replace(/bg-blue-100/g, 'bg-gray-200');
  content = content.replace(/bg-blue-200/g, 'bg-gray-300');
  content = content.replace(/bg-blue-300/g, 'bg-gray-400');
  content = content.replace(/bg-blue-400/g, 'bg-gray-500');
  
  content = content.replace(/border-blue-100/g, 'border-gray-300');
  content = content.replace(/border-blue-200/g, 'border-gray-300');
  content = content.replace(/border-blue-300/g, 'border-gray-400');
  content = content.replace(/border-blue-500/g, 'border-gray-500');
  content = content.replace(/focus:border-blue-500/g, 'focus:border-gray-500');
  
  content = content.replace(/border-l-blue-600/g, 'border-l-gray-900');
  
  content = content.replace(/from-blue-600/g, 'from-gray-900');
  content = content.replace(/to-purple-600/g, 'to-gray-600');
  
  content = content.replace(/rgba\(59, 130, 246/g, 'rgba(0, 0, 0');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

traverseDir('./src');
console.log('Replacements completed successfully.');
