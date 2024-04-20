import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clv3exfiq2syx07wbcipo0vvf/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getService = async () => {
  const query = gql`
    query GetServices {
      services {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
export default {
  getSlider,
  getService,
};
