export interface RestaurantInfo {
  name: string;
  tagline: string;
  type: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
    full: string;
    plusCode: string;
  };
  openingHours: {
    days: string;
    hours: string;
    schedule: { day: string; hours: string }[];
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
  };
  ordering: {
    clickAndCollectUrl: string;
    menuUrl: string;
  };
  announcement: string;
  disclaimer: {
    orderingDemo: string;
    checkoutNote: string;
  };
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "MEXI CANO EXPRESS",
  tagline: "TRUE MEXICAN FLAVOURS. EXPRESSLY MADE.",
  type: "Fast-Casual Mexican Restaurant / Takeaway / Dine-In",
  address: {
    street: "41 Bridge St",
    city: "Peterborough",
    postcode: "PE1 1HA",
    country: "United Kingdom",
    full: "41 Bridge St, Peterborough PE1 1HA, United Kingdom",
    plusCode: "HQC5+F5 Peterborough, United Kingdom",
  },
  openingHours: {
    days: "Monday – Sunday",
    hours: "11:00 AM – 11:00 PM",
    schedule: [
      { day: "Monday", hours: "11:00 AM – 11:00 PM" },
      { day: "Tuesday", hours: "11:00 AM – 11:00 PM" },
      { day: "Wednesday", hours: "11:00 AM – 11:00 PM" },
      { day: "Thursday", hours: "11:00 AM – 11:00 PM" },
      { day: "Friday", hours: "11:00 AM – 11:00 PM" },
      { day: "Saturday", hours: "11:00 AM – 11:00 PM" },
      { day: "Sunday", hours: "11:00 AM – 11:00 PM" },
    ],
  },
  socialLinks: {
    instagram: "https://www.instagram.com/mexicanoexpress_?obrf=bWI5OHg4d281N2hm",
    facebook: "https://www.facebook.com/share/1QZPjTtDVe/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@mexicanoexpress_?_r=1&_t=ZS-9BU6aggR0Z6",
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.685324545589!2d-0.24584742337770853!3d52.5714083720743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f0f6244ca3cb%3A0xa193bc28eaef2ec8!2s41%20Bridge%20St%2C%20Peterborough%20PE1%201HA%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=41+Bridge+St%2C+Peterborough+PE1+1HA%2C+United+Kingdom",
  },
  ordering: {
    clickAndCollectUrl: "/menu",
    menuUrl: "/menu",
  },
  announcement: "FRESH MEXICAN FLAVOURS • MADE FOR YOU • PETERBOROUGH",
  disclaimer: {
    orderingDemo: "Online ordering integration is coming soon! This website provides a live menu experience and ordering basket preview.",
    checkoutNote: "This online checkout is currently in demonstration mode. Please visit our store at 41 Bridge St, Peterborough for dining in and takeaway orders.",
  },
};
