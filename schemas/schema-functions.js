import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const schemaDefinitionsDirectory = path.join(process.cwd(), 'schemas/schema-definitions');

export function getAllSchemaNames() {
  const fileNames = fs.readdirSync(schemaDefinitionsDirectory);

  return fileNames.map((fileName) => fileName.replace('.xml', ''));
}

export default function getSchemaData(name) {
  const fullPath = path.join(schemaDefinitionsDirectory, `${name}.xml`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return fileContents;
}
