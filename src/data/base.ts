import { ContactPhoneOutlined, WhatsApp, AccountCircleOutlined, SnippetFolderOutlined, MonetizationOnOutlined, CreditCardOutlined, NetworkWifiOutlined, AssuredWorkloadOutlined, ShoppingBagOutlined, SendTimeExtensionOutlined, ArrowUpward, SendOutlined, ConnectWithoutContact, BarChart, SettingsCell, CameraRear, SportsSoccer, ConnectedTv, Wallet, HistoryEdu, Category, CardGiftcardOutlined, CardMembershipOutlined, HomeOutlined, CurrencyExchangeOutlined, Add, RestartAlt, Send, PersonAdd, CreditCard, ShieldOutlined, PersonOutlined, AccountBalanceWallet } from '@mui/icons-material';

export const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        url: '/dashboard',
        icon: HomeOutlined,
        dropdownMenu: [],
    },
    {
        id: 2,
        title: "Virtual Cards",
        url: '/virtual-cards',
        icon: CardMembershipOutlined,
        dropdownMenu: [],
    },
    {
        id: 3,
        title: "Connect Bank",
        url: '/connect-bank',
        icon: AssuredWorkloadOutlined,
        dropdownMenu: [],
    },
    {
        id: 4,
        title: "Transfer",
        url: 'transfer',
        icon: SendTimeExtensionOutlined,
        dropdownMenu: [
            {
                id: 1,
                title: 'NGN - NGN Transfer',
                url: '/ngn-ngn-transfer'
            },
            {
                id: 2,
                title: 'NGN - Foreign Transfer',
                url: '/ngn-foreign-transfer'
            },
        ],
    },
    {
        id: 5,
        title: "P2P Lending 🔥",
        url: '/p2p-lending',
        icon: CurrencyExchangeOutlined,
        dropdownMenu: [],
    },
    {
        id: 6,
        title: "Redeem Giftcard",
        url: '/redeem-giftcard',
        icon: CardGiftcardOutlined,
        dropdownMenu: [],
    },
    {
        id: 7,
        title: "VTU Payment",
        url: 'vtu-payment',
        icon: ShoppingBagOutlined,
        dropdownMenu: [
            {
                id: 1,
                title: 'Buy Airtime',
                url: '/buy-airtime'
            },
            {
                id: 2,
                title: 'Buy Data',
                url: '/buy-data'
            },
            {
                id: 3,
                title: 'Buy Bulk Data',
                url: '/buy-bulk-data'
            },
            {
                id: 4,
                title: 'Fetch Airtime Pin',
                url: '/fetch-airtime-pin'
            },
            {
                id: 5,
                title: 'Sell Airtime',
                url: '/sell-airtime'
            },
            {
                id: 6,
                title: 'Fund Wallet',
                url: '/fund-wallet'
            },
            {
                id: 7,
                title: 'Transaction History',
                url: '/vtu/transaction-history'
            },
        ],
    },
    {
        id: 8,
        title: "Data Menu",
        url: 'data-menu',
        icon: NetworkWifiOutlined,
        dropdownMenu: [
            {
                id: 1,
                title: 'Data Pricing',
                url: '/data-pricing'
            },
            {
                id: 2,
                title: 'MTN Data Plans',
                url: '/mtn-data-plans'
            },
            {
                id: 3,
                title: 'Airtel Data Plans',
                url: '/airtel-data-plans'
            },
            {
                id: 4,
                title: 'Glo Data Plans',
                url: '/glo-data-plans'
            },
            {
                id: 5,
                title: '9Mobile Data Plans',
                url: '/9mobile-data-plans'
            },
        ],
    },
    {
        id: 9,
        title: "Bills Payment",
        url: 'bills-payment',
        icon: CreditCardOutlined,
        dropdownMenu: [
            {
                id: 1,
                title: 'DSTV',
                url: '/dstv'
            },
            {
                id: 2,
                title: 'GOTV',
                url: '/gotv'
            },
            {
                id: 3,
                title: 'STARTIMES',
                url: '/startimes'
            },
            {
                id: 4,
                title: 'WAEC PINS',
                url: '/waec-pins'
            },
            {
                id: 5,
                title: 'ELECTRICITY',
                url: '/electricity'
            },
            {
                id: 6,
                title: 'SPORTS AND BETTING',
                url: '/sports-and-betting'
            },
        ],
    },
    {
        id: 9,
        title: "Refer and Earn",
        url: '/refer-and-earn',
        icon: MonetizationOnOutlined,
        dropdownMenu: [],
    },
    {
        id: 11,
        title: "Account",
        url: 'account',
        icon: AccountCircleOutlined,
        dropdownMenu: [
            // {
            //     id: 1,
            //     title: 'Profile',
            //     url: '/profile'
            // },
            {
                id: 2,
                title: 'Profile Settings',
                url: '/profile-settings'
            },
            {
                id: 3,
                title: 'KYC Compliance',
                url: '/kyc-compliance'
            },
            // {
            //     id: 4,
            //     title: 'Verification Status',
            //     url: '/verification-status'
            // },
        ],
    },
    {
        id: 12,
        title: "API Docs",
        url: '/api-docs',
        icon: SnippetFolderOutlined,
        dropdownMenu: [],
    },
    {
        id: 13,
        title: "Join WhatsApp group",
        url: '/whatsapp',
        icon: WhatsApp,
        dropdownMenu: [],
    },
    {
        id: 14,
        title: "Contact Support",
        url: '/contact-support',
        icon: ContactPhoneOutlined,
        dropdownMenu: [],
    },
];

export const CardStatusDistribution = [
    {id: 1, cards: 950, name: 'Active' },
    {id: 2, cards: 300, name: 'Expired' },
    {id: 3, cards: 70, name: 'Inactive' },
    {id: 4, cards: 90, name: 'Blocked' },
    {id: 5, cards: 120, name: 'Lost' },
];
  
export const PIE_COLORS = ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

export const currentRecentTransactionsTableHead = [
    {id: 1, title: "Description"},
    {id: 2, title: "Amount"},
    {id: 3, title: "Status"},
    {id: 4, title: "Type"},
    {id: 5, title: "Date"},
];

export const cardRequests = [
    {id: 1, transaction: "Spotify", amount: '1,500', date: 'Wed 23:21pm', status: 'Success', category: 'Subscriptions', avatar: '2.jpeg' },
    {id: 2, transaction: "Alexa Doe", amount: '500', date: 'Wed 23:21pm', status: 'Declined', category: 'Deposit', avatar: 'default_avatar.png' },
    {id: 3, transaction: "Figma", amount: '1,500', date: 'Wed 23:21pm', status: 'Processing', category: 'Income', avatar: '3.jpeg' },
    {id: 4, transaction: "Fresh F&V", amount: '300', date: 'Wed 23:21pm', status: 'Success', category: 'Groceries', avatar: '5.jpeg' },
    {id: 5, transaction: "Sam Sulek", amount: '1,500', date: 'Wed 23:21pm', status: 'Processing', category: 'Food', avatar: 'default_avatar.png' },
    {id: 6, transaction: "Spotify", amount: '1,500', date: 'Wed 23:21pm', status: 'Success', category: 'Subscriptions', avatar: '2.jpeg' },
    {id: 7, transaction: "Alexa Doe", amount: '500', date: 'Wed 23:21pm', status: 'Declined', category: 'Deposit', avatar: 'default_avatar.png' },
    {id: 8, transaction: "Figma", amount: '1,500', date: 'Wed 23:21pm', status: 'Processing', category: 'Income', avatar: '3.jpeg' },
    {id: 9, transaction: "Fresh F&V", amount: '300', date: 'Wed 23:21pm', status: 'Success', category: 'Groceries', avatar: '5.jpeg' },
    {id: 10, transaction: "Sam Sulek", amount: '1,500', date: 'Wed 23:21pm', status: 'Processing', category: 'Food', avatar: 'default_avatar.png' },
];

export const budgets = [
    {id: 1, text1: "Subscriptions", text2: '$28 left', icon: 'setting-05.svg', bg: 'gray', overallColor: 'blue', progress: '25' },
    {id: 2, text1: "Food and booze", text2: '$120 left', icon: 'package-check.svg', bg: 'orange', overallColor: 'green', progress: '75' },
    {id: 3, text1: "Savings", text2: '$50 left', icon: 'credit-card-pos.svg', bg: 'green', overallColor: 'red', progress: '40' },
];

export const transactionsOptions = [
    {id: 1, title: "Local Transfer", btnText: 'Send', textIcon: ArrowUpward, btnIcon: SendOutlined},
    {id: 2, title: "Foreign Transfer", btnText: 'Send', textIcon: ArrowUpward, btnIcon: SendOutlined},
    {id: 3, title: "Connect Bank", btnText: 'Connect', textIcon: BarChart, btnIcon: ConnectWithoutContact},
];

export const availableTransactions = [
    {id: 1, title: "Airtime", icon: SettingsCell},
    {id: 2, title: "Data", icon: CameraRear},
    {id: 3, title: "Betting", icon: SportsSoccer},
    {id: 4, title: "TV Subscription", icon: ConnectedTv},
    {id: 5, title: "Fund Wallet", icon: Wallet},
    {id: 6, title: "Transaction History", icon: HistoryEdu},
    {id: 7, title: "More", icon: Category},
];

export const INITIAL_GENERAL_DATA = {
    currentTab: '',
    currentSubtab: '',
}

export const availableBankOptions = [
    {id: 1, accountName: "Maleek Umar Buhari", bank: 'United Bank of Africa (UBA)', accountNumber: '9847635637'},
    {id: 2, accountName: "Onyeka Onwenu Veronica", bank: 'First Bank of Nigeria (FBN)', accountNumber: '8374649072'},
    {id: 3, accountName: "Vik John Basil", bank: 'Zenith Bank', accountNumber: '0947483622'},
    {id: 4, accountName: "John Doe Mark", bank: 'Fidelity Bank', accountNumber: '3384995787'},
    {id: 5, accountName: "Ifeanyi Hyacinth Okafor", bank: 'Union Bank', accountNumber: '0049044453'},
    {id: 6, accountName: "Mark Anthony Odumodu", bank: 'Access Bank', accountNumber: '2849111758'},
];

export const p2pLendingTabs = [
    {id: 1, title: "Lend"},
    {id: 2, title: "Borrow"},
    {id: 3, title: "History"},
];

export const dashboardTabs = [
    {id: 1, title: "General"},
    {id: 2, title: "VTU"},
    {id: 3, title: "Bills"},
];

export const availableLendersTableHead = [
    {id: 1, title: "S/N"},
    {id: 2, title: "Image"},
    {id: 3, title: "Full Name"},
    {id: 4, title: "Amount"},
    {id: 5, title: "Rating/100"},
    {id: 6, title: "Action"},
];

export const availableLenders = [
    {id: 1, fullName: "Jude Adeyemi", amount: '120,500', rating: '55', avatar: '2.jpeg' },
    {id: 2, fullName: "Victory Okolie", amount: '500000', rating: '23', avatar: 'default_avatar.png' },
    {id: 3, fullName: "Emmanuel Damilola", amount: '150,500', rating: '77', avatar: '3.jpeg' },
    {id: 4, fullName: "Mark Anthony", amount: '300000', rating: '48', avatar: '5.jpeg' },
    {id: 5, fullName: "Sam Sulek", amount: '1,000,000', rating: '100', avatar: 'default_avatar.png' },
    {id: 6, fullName: "Onyema Ejike", amount: '120,500', rating: '100', avatar: '2.jpeg' },
    {id: 7, fullName: "Alexa Doe", amount: '80000', rating: '55', avatar: 'default_avatar.png' },
    {id: 8, fullName: "Sunday Uwaezuoke", amount: '100,500', rating: '60', avatar: '3.jpeg' },
    {id: 9, fullName: "Favour Odeyemi", amount: '30000', rating: '75', avatar: '5.jpeg' },
    {id: 10, fullName: "Sam Sulek", amount: '150,000', rating: '65', avatar: 'default_avatar.png' },
];

export const rowDropdownMenu = [
    {
        id: 1,
        title: 'Accept',
        url: ''
    },
    {
        id: 2,
        title: 'View User',
        url: '/user'
    },
    {
        id: 3,
        title: 'Report User',
        url: ''
    },
    {
        id: 4,
        title: 'Block User',
        url: ''
    },
];


export const users = [
    { id: 1, organization: 'Lendsqr', username: 'Grace Effiom', email: 'grace@lendsqr.com', phoneNumber: '07038474444', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'active' },
    { id: 2, organization: 'Irorun', username: 'Adedeji Joy', email: 'joy@lendsqr.com', phoneNumber: '07094833345', dateJoined: 'May 20, 2021 09:35 AM', status: 'inactive' },
    { id: 3, organization: 'Relith', username: 'Debby Ogana', email: 'debby@relith.com', phoneNumber: '07003957771', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'active' },
    { id: 4, organization: 'McCkiney', username: 'Ada Imoke', email: 'ada@mcckiney.com', phoneNumber: '07038474444', dateJoined: 'Sept 22, 2022 01:00 PM', status: 'blacklisted' },
    { id: 5, organization: 'Flektr', username: 'Emma Vin', email: 'emma@flektr.com', phoneNumber: '07003957771', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'active' },
    { id: 6, organization: 'Lendstar', username: 'Zara Grace', email: 'zara@lendstar.com', phoneNumber: '07094833345', dateJoined: 'May 20, 2021 09:35 AM', status: 'pending' },
    { id: 7, organization: 'Amliss', username: 'Excel Adindu', email: 'excel@amliss.com', phoneNumber: '07038474444', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'active' },
    { id: 8, organization: 'Hexasphere', username: 'Ify Okoye', email: 'ify@hexasphere.com', phoneNumber: '07003957771', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'blacklisted' },
    { id: 9, organization: 'Agubas', username: 'Max Bonny', email: 'max@agubas.com', phoneNumber: '07038474444', dateJoined: 'Sept 22, 2022 01:00 PM', status: 'inactive' },
    { id: 10, organization: 'Innova', username: 'Tosin Mark', email: 'tosin@innova.com', phoneNumber: '07094833345', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'pending' },
]


export const currentUserInfo = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: {
      country: '',
      state: '',
      city: '',
      home_address: '',
    },
    gender: '',
    date_of_birth: '',
    password: '',
    confirm_password: '',
    role: 'user',
    createdAt: '2025-03-23T16:12:51.656Z',
    updatedAt: '2025-03-23T16:12:51.656Z',
  }
 

  export const walletBalanceInfo = [
    {
        id: 1,
        currency: '₦',
        currencyInitials: 'NGN',
        currencyFlag: 'nigerian_flag.jpg',
        balance: '22345974.37'
    },
    {
        id: 2,
        currency: '£',
        currencyInitials: 'GBP',
        currencyFlag: 'canada.svg.webp',
        balance: '4234565.46'
    },
    {
        id: 3,
        currency: '$',
        currencyInitials: 'USD',
        currencyFlag: 'us.jpg',
        balance: '7024344.90'
    },
];

export const quickActions = [
    {
        id: 1,
        icon: Add,
        text: 'Fund Wallet',
    },
    {
        id: 2,
        icon: Send,
        text: 'Transfer',
    },
    {
        id: 3,
        icon: RestartAlt,
        text: 'Convert',
    },
    {
        id: 4,
        icon: PersonAdd,
        text: '+Beneficiary',
    },
];

export const accountAndVirtualCardsTabs = [
    {
        id: 1,
        icon: PersonOutlined,
        text: 'Profile',
    },
    {
        id: 2,
        icon: ShieldOutlined,
        text: 'Verification',
    },
    {
        id: 3,
        icon: CreditCard,
        text: 'Create Card',
    },
    {
        id: 4,
        icon: AccountBalanceWallet,
        text: 'My Cards',
    },
];

export const virtualCards = [
    {
        id: 1,
        cardNumber: '3333 4444 5555 9999',
        expiryDate: '10/27',
        cardHolder: 'John Doe',
        cvv: 119,
        balance: 3000,
        active: true,
    },
    {
        id: 2,
        cardNumber: '8734 4444 5555 0958',
        expiryDate: '08/26',
        cardHolder: 'Mike Moe',
        cvv: 249,
        balance: 500,
        active: true,
    },
    {
        id: 3,
        cardNumber: '2998 4444 5555 3473',
        expiryDate: '05/28',
        cardHolder: 'Joey Okoye',
        cvv: 210,
        balance: 1500,
        active: false,
    },
];

export const airtimeProviderLogos: Record<string, string> = {
    MTN: "/images/mtn-icon.jpg",
    AIRTEL: "/images/airtel-icon.jpg",
    GLO: "/images/glo-icon.jpg",
    "9MOBILE": "/images/9mobile-icon.jpg",
};
  
export const providerLogos: Record<string, string> = {
  "AIRTEL Direct": "/images/airtel-icon.jpg",
  "MTN Direct": "/images/mtn-icon.jpg",
  "GLO Direct": "/images/glo-icon.jpg",
  "9MOBILE Direct": "/images/9mobile-icon.jpg",
  "MTN SME": "/images/mtn-icon.jpg",
  "SMILE 4G": "/images/Smile-communications.png",
  "AIRTEL Corporate Gifting": "/images/airtel-icon.jpg",
  "Spectranet Internet Data": "/images/spectranet-2.png",
};

export const providerParams: Record<string, string> = {
    "AIRTEL Direct": "AIRTEL",
    "MTN Direct": "MTN",
    "GLO Direct": "GLO",
    "9MOBILE Direct": "9MOBILE",
    "MTN SME": "MTN",
    "SMILE 4G": "SMILE4G",
    "AIRTEL Corporate Gifting": "AIRTEL",
    "Spectranet Internet Data": "SPECTRANET",
};

export const idTypes = ['NIGERIAN_BVN_VERIFICATION', 'NIGERIAN_NIN', 'NIGERIAN_INTERNATIONAL_PASSPORT', 'NIGERIAN_PVC', 'NIGERIAN_DRIVERS_LICENSE']
