import box1 from '@/assets/box1.webp'
import box2 from '@/assets/box2.webp'
import box3 from '@/assets/box3.webp'
import box4 from '@/assets/box4.webp'
import box5 from '@/assets/box5.webp'
import box6 from '@/assets/box6.png'

import product1 from '@/assets/product1.jpg'
import product2 from '@/assets/product2.webp'
import product3 from '@/assets/product3.webp'
import product4 from '@/assets/product4.webp'
import product5 from '@/assets/product5.webp'

import banner1 from '@/assets/banner1.jpg'
import banner2 from '@/assets/banner2.jpg'
import banner3 from '@/assets/banner3.jpg'
import { ProductType } from './components/Product'
import { title } from 'process'

   
export const bannerTop = [
    box1, box2, box6
]

export const bannerCarousel = [
  banner3, banner1, banner2
] 

export const bannerBottom = [
    box4, box5
]

export const policy = [
    {
      icon: 'https://htmldemo.net/organicfood/organicfood/assets/img/ship/1.png',
      title: 'Free Shipping On Order Over $120',
      describe: 'Free shipping on all order'
    },
    {
      icon: 'https://htmldemo.net/organicfood/organicfood/assets/img/ship/2.png',
      title: 'Money Return',
      describe: 'Back guarantee under 7 days'
    },
    {
      icon: 'https://htmldemo.net/organicfood/organicfood/assets/img/ship/3.png',
      title: 'Member Discount',
      describe: 'Support online 24 hours a day'
    },
    {
      icon: 'https://htmldemo.net/organicfood/organicfood/assets/img/ship/4.png',
      title: 'Online Support 24/7',
      describe: 'Free shipping on all order'
    }
  ]

export type SportType = {
  label: string,
  value: string,
  category: {title: string, tag: string}[]
}

export const sportData: SportType[] = [
  {
    label: 'Bóng đá & Futsal',
    value: 'football-fotsal',
    category: [
      {
        title: 'Bóng thi đấu',
        tag: 'competition-ball'
      },
      {
        title: 'Giày', 
        tag: 'shoe'
      },
      {
        title: "Phụ kiện",
        tag: 'accessory'
      }
    ]
  },
  {
    label: 'Bóng chuyền',
    value: 'volleyball',
    category: [
      {
        title: 'Bóng thi đấu',
        tag: 'competition-ball'
      },
      {
        title: 'Giày', 
        tag: 'shoe'
      },
      {
        title: "Phụ kiện",
        tag: 'accessory'
      }
    ]
  },
  {
    label: 'Bóng rổ',
    value: 'basketball',
    category: [
      {
        title: 'Bóng thi đấu',
        tag: 'competition-ball'
      },
      {
        title: 'Giày', 
        tag: 'shoe'
      },
      {
        title: "Phụ kiện",
        tag: 'accessory'
      }
    ]
  },
  {
    label: 'Cầu lông',
    value: 'badminton',
    category: [
      {
        title: 'Vợt cầu lông',
        tag: 'badminton-racket'
      },
      {
        title: "Cầu thi đấu",
        tag: 'shuttlecock'
      },
      {
        title: 'Giày', 
        tag: 'shoe'
      },
      {
        title: "Phụ kiện",
        tag: 'accessory'
      }
    ]
  },
  {
    label: 'Chạy bộ & Đi bộ',
    value: 'running',
    category: [
      {
        title: 'Giày', 
        tag: 'shoe'
      },
      {
        title: "Phụ kiện",
        tag: 'accessory'
      }
    ]
  }
]
