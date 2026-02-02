import { viewDataByApi, getListByApi } from "./actions";
import { URL_CONSTANTS } from "./urls";

const getjobpostById = (dataId) => {
  return viewDataByApi(URL_CONSTANTS.jobposts, dataId);
};
const getBlogById = (dataId) => {
  return viewDataByApi(URL_CONSTANTS.blogs, dataId);
};
const getBlog = (params) => {
  return getListByApi(URL_CONSTANTS.blogs, params);
};
const getblogsList = (params) => {
  return getListByApi(URL_CONSTANTS.blogslist, params);
};
const getJobPosts = (params) => {
  return getListByApi(URL_CONSTANTS.jobposts, params);
};
const getCaseStudies = (params) => {
  return getListByApi(URL_CONSTANTS.caseStudy, params);
};
const getCaseStudiesId = (dataId) => {
  return viewDataByApi(URL_CONSTANTS.caseStudy, dataId);
};
const getindustryCategories = (params) => {
  return getListByApi(URL_CONSTANTS.industryCategories, params);
};
const getBlogCategories = (params) => {
  return getListByApi(URL_CONSTANTS.blogCategories, params);
};

const getGeoLocation = (params) => {
  return getListByApi(URL_CONSTANTS.geoLocation, params);
};

// Digital marketing
const getDigitalMarketing = (params) => {
  return getListByApi(URL_CONSTANTS.digitalMarketing, params);
};

// const getsearchList = params => {
//   return getListByApi(URL_CONSTANTS.blogsSearch, params);
// }

// const getBlogComment = (params) => {
//   return getListByApi(URL_CONSTANTS.blogComments, params);
// };
// const getBlogCommentId = (dataId) => {
//   return viewDataByApi(URL_CONSTANTS.blogComments, dataId);
// };
// const getblogsCategory = (params) => {
//   return getListByApi(URL_CONSTANTS.blogsCategories, params);
// };
// const getcontactaddress = (params) => {
//   return getListByApi(URL_CONSTANTS.contacts, params);
// };
// const getContactAddress = (params) => {
//   return getListByApi(URL_CONSTANTS.organizationdetails, params);
// };
// const getCompanyStatistics = (params) => {
//   return getListByApi(URL_CONSTANTS.companystatistics, params);
// };

// const getsocialMedia = (params) => {
//   return getListByApi(URL_CONSTANTS.socialmedialink, params);
// };
const getDropDownData = (params) => {
  return getListByApi(URL_CONSTANTS.OpeningDropDown, params);
};
// const getReview = (params) => {
//   return getListByApi(URL_CONSTANTS.reviews, params);
// };
const getTestimonial = (params) => {
  return getListByApi(URL_CONSTANTS.testimonials, params);
};
// const getData = (params) => {
//   return getListByApi(URL_CONSTANTS.jobposts, params);
// }
const companyStatistics = (dataId) => {
  return getListByApi(URL_CONSTANTS.companystatistics, dataId);
};

export {
  getjobpostById,
  getBlogById,
  // getBlogComment,
  getBlog,
  getJobPosts,
  getblogsList,
  getCaseStudies,
  getCaseStudiesId,
  getindustryCategories,
  getBlogCategories,
  // getcontactaddress,
  // getCompanyStatistics,
  // getsocialMedia,
  // getContactAddress,
  // getBlogCommentId,
  getDropDownData,
  // getReview,
  // getsearchList,
  // getblogsCategory,
  getTestimonial,
  // getData,
  companyStatistics,
  getGeoLocation,
  getDigitalMarketing,
};
