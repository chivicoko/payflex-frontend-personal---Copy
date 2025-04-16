import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    discountPercentage: string;
    rating: string;
    stock: string;
    quantity?: number;
    thumbnail: string;
    images: string[];
    dimensions: {
      width: string;
      height: string;
      depth: string;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    tags: string[];
    sku: string;
    weight: string;
    returnPolicy: string;
    minimumOrderQuantity: string;
    reviews: {
      date: string;
      rating: string;
      comment: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
}
  
export type GeneralDataProps = {
  currentTab: string,
  currentSubtab: string,
}

export interface UserDataProps {
  first_name: string;
  last_name: string;
  email: string;
  // phone_number: string;
  // address: {
  //   country: string;
  //   state: string;
  //   city: string;
  //   home_address: string;
  // };
  // gender: string;
  // date_of_birth: string;
  password: string;
  // confirm_password: string;
}

export interface LocalStorateUserDataProps {
  id: string,
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: {
    country: string;
    state: string;
    city: string;
    home_address: string;
  };
  gender: string;
  date_of_birth: string;
  password: string;
  confirm_password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface WalletBalanceInfoProps {
  item: {
    id: number;
    currency: string;
    currencyFlag: string;
    currencyInitials: string;
    balance: string;
  };
}

export interface QuickActionsProps {
  item: {
    id: number;
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
    text: string;
  };
}

export interface DecodedToken {
  userId: string;
  first_name: string;
  last_name: string;
  email: string;
  exp: number; // token expiration time (optional)
  iat: number; // token issued at time (optional)
}

export interface VirtualCardProps {
  id: number,
  cardNumber: string,
  expiryDate: string,
  cardHolder: string,
  cvv: number,
  balance: number,
  active: boolean,
}

export interface WalletProps {
  id: string,
  current_balance: number,
  all_time_fuunding: number,
  all_time_withdrawn: number,
  isActive: boolean,
  createdAt: string,
  updatedAt: string,
}

export interface TransactionHistoryProps {
  id: string,
  amount: number,
  type: string,
  description: string,
  status: string,
  date: string,
  sender: string,
  icon: string,
}

export interface UserProps {
  id: string,
  name: string,
  email: string,
  profileImage: null,
}

export interface UserProfileProps {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  gender: string,
  role: string,
  date_of_birth: string,
  email_verification: boolean,
  joined: string,
}

export interface UserAddressProps {
  id: string,
  house_no: string,
  house_address: string,
  city: string,
  state: string,
  country: string,
  postal_code: string,
}

export interface UserKYCProps {
  id: string,
  user_id: string,
  is_active: string,
  status: string,
  id_type: string,
  id_number: string,
}

export interface AirtimeProviderProps {
  maxAmount: string,
  minAmount: string,
  provider: string,
  providerLogoUrl: string
}

export interface AirtimeProviderResponse {
  data: AirtimeProviderProps[];
  success: boolean;
  message: string;
}

export interface AirtimeTransactionDataProps {
  provider: string,
  phoneNumber: string,
  amount: string,
  date: string,
  reference: string,
  status: string,
}

export interface InternetDataProviderProps {
  id: number,
  ip_id: number,
  name: string,
}

export interface InternetDataPlanProps {
  id: number,
  data_type_id: number,
  api_cent: string,
  amount: string,
  name: string,
}

export interface InternetDataTransactionDataProps {
  transactionProvider: string,
  phoneNumber: string,
  amount: string,
  date: string,
  reference: string,
  status: string,
}

export interface ProviderResponse {
  success: boolean;
  message: string;
  data: {
    success: boolean;
    message: string;
    code: string,
    data: InternetDataProviderProps[]
  }
}
