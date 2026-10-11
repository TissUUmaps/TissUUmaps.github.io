import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";

import PartnerLogosNavbarItem from "./PartnerLogosNavbarItem";

// Adds our navbar item types to the ones of Docusaurus (custom types must be
// prefixed with "custom-")
export default {
  ...ComponentTypes,
  "custom-partnerLogos": PartnerLogosNavbarItem,
};
