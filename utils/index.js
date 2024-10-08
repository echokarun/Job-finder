export const checkImageURL = (url) => {
   if (!url) return false;
   // Check if the URL starts with http/https to consider it valid
   const pattern = new RegExp('^https?:\\/\\/', 'i'); 
   return pattern.test(url);
};
