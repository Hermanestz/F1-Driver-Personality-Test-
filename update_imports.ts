import fs from 'fs';
import path from 'path';

const constantsPath = path.resolve('./src/constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// 提取所有用到的图片路径
const imagePaths = new Set<string>();
const regex = /'(?:\/images\/cars\/[^']+)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
  imagePaths.add(match[0].replace(/'/g, ''));
}

// 生成 import 语句
const imports: string[] = [];
const replacements: { [key: string]: string } = {};

let i = 0;
imagePaths.forEach((imgPath) => {
  const varName = `img${i++}`;
  // imgPath 是类似 /images/cars/2026redbullracingcarright.webp
  // 我们需要把它变成相对路径 ./images/cars/...
  const relativePath = `.${imgPath}`;
  imports.push(`import ${varName} from '${relativePath}';`);
  replacements[imgPath] = varName;
});

// 替换文件内容
let newContent = content;
for (const [imgPath, varName] of Object.entries(replacements)) {
  // 替换所有的 '/images/...' 为变量名
  newContent = newContent.replace(new RegExp(`'${imgPath}'`, 'g'), varName);
}

// 在文件顶部插入 import 语句
const finalContent = imports.join('\n') + '\n\n' + newContent;

fs.writeFileSync(constantsPath, finalContent);
console.log('constants.ts updated successfully with imports.');
