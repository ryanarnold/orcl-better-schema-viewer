import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const schemaDefinitionsDirectory = path.join(process.cwd(), 'schemas/schema-definitions');

export function getAllSchemaNames() {
  const fileNames = fs.readdirSync(schemaDefinitionsDirectory);

  return fileNames.map((fileName) => fileName.replace('.xml', ''));
}

export default function getPostData(id) {
  const fullPath = path.join(schemaDefinitionsDirectory, `${id}.xml`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
