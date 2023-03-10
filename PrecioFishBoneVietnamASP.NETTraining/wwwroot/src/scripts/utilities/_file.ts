import { FileHelper } from '../models/_file';
import Item, { ItemType } from '../types/_item';

export const isValidFileName = (fileName: string): boolean => {
  const rg1 = /^[^\\/:*?"<>|]+$/; // forbidden characters \ / : * ? " < > |
  const rg2 = /^\./; // cannot start with dot (.)
  const rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i; // forbidden file names
  return rg1.test(fileName) && !rg2.test(fileName) && !rg3.test(fileName);
};

export const fileExtensionToIconMapper: Record<string, string> = {
  xlsx: '<i class="text-success fa fa-light fa-file-excel"></i>',
  xls: '<i class="text-success fa fa-light fa-file-excel"></i>',
  docx: '<i class="text-primary fa fa-light fa-file-word"></i>',
  doc: '<i class="text-primary fa fa-light fa-file-word"></i>',
  pptx: '<i class="text-danger fa fa-light fa-file-powerpoint"></i>',
  ppt: '<i class="text-danger fa fa-light fa-file-powerpoint"></i>',
  pdf: '<i class="text-danger fa fa-light fa-file-pdf"></i>',
  txt: '<i class="fa fa-light fa-file-alt"></i>',
  zip: '<i class="text-primary fa fa-light fa-file-archive"></i>',
  rar: '<i class="text-primary fa fa-light fa-file-archive"></i>',
  mp4: '<i class="text-primary fa fa-light fa-file-video"></i>',
  mp3: '<i class="text-primary fa fa-light fa-file-audio"></i>',
  png: '<i class="text-primary fa fa-light fa-file-image"></i>',
  jpg: '<i class="text-primary fa fa-light fa-file-image"></i>',
  url: '<i class="fa fa-light fa-link"></i>',
  ts: '<i class="text-info fa fa-light fa-file-code-o"></i>',
  js: '<i class="text-info fa fa-light fa-file-code"></i>',
  exe: '<i class="text-success fa fa-light fa-file-code"></i>',
  cs: '<i class="text-primary fa fa-light fa-file-image"></i>'
};

export const defaultFileIcon = '<i class="text-secondary fa fa-light fa-file"></i>';
export const folderIcon = '<i class="fa fa-regular fa-folder-open"></i>';

export const mapFileExtensionToIcon = (fileExtension: string): string => {
  return fileExtensionToIconMapper[fileExtension.slice(1) as keyof Record<string, string>] || defaultFileIcon;
};

export const parseFileExtension = (fileName: string) => {
  const fileSplit = fileName.split('.');
  if (fileSplit.length === 1) return '';
  const fileExtension = fileSplit[fileSplit.length - 1];
  return fileExtension ? fileExtension.toLowerCase() : '';
};

export const isFile = (item: Item) => {
  return item && item.itemType === ItemType.File;
};

export const fileHelper = new FileHelper();
