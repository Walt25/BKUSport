import box1 from '@/assets/box1.webp'
import box2 from '@/assets/box2.webp'
import box3 from '@/assets/box3.webp'
import box4 from '@/assets/box4.webp'
import box5 from '@/assets/box5.webp'
import product1 from '@/assets/product1.jpg'
import product2 from '@/assets/product2.webp'
import product3 from '@/assets/product3.webp'
import product4 from '@/assets/product4.webp'
import product5 from '@/assets/product5.webp'

import banner1 from '@/assets/banner1.jpg'
import banner2 from '@/assets/banner2.jpg'
import banner3 from '@/assets/banner3.webp'
import { ProductType } from './components/Product'

   
export const bannerTop = [
    box1, box2, box3
]

export const bannerCarousel = [
    banner1, banner2, banner3
] 

export const bannerBottom = [
    box4, box5
]



// export const products: ProductType[] = [
//     {
//       id: "0",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/2.jpg',
//       title: 'Cheese Butter Burger',
//       price: 75.66,
//       isNew: true,
//     },
//     {
//       id: "1",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/3.jpg',
//       title: 'Orange Butter',
//       price: 65.66,
//       isNew: true,
//       discount: '5%'
//     },
//     {
//       id: "2",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/4.jpg',
//       title: 'Wayfarer Burger',
//       price: 75.66,
//       isNew: true,
//     },
//     {
//       id: "3",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/5.jpg',
//       title: 'Aloha geme',
//       price: 75.66,
//       isNew: true,
//       discount: '5%'
//     },
//     {
//       id: "4",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/6.jpg',
//       title: 'Cheese Tomato',
//       price: 75.66,
//       isNew: true,
//       discount: '5%'
//     },
//     {
//       id: "5",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/7.jpg',
//       title: 'Apati Solar Mil',
//       price: 75.66,
//       isNew: true,
//     },
//     {
//       id: "6",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/8.jpg',
//       title: 'Popabe Sandwi Kal',
//       price: 75.66,
//       discount: '5%'
//     },
//     {
//       id: "7",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/9.jpg',
//       title: 'Cheese Butter Burger',
//       price: 75.66,
//       isNew: true,
//       discount: '5%'
//     },
//     {
//       id: "8",
//       src: 'https://htmldemo.net/organicfood/organicfood/assets/img/product/10.jpg',
//       title: 'Cheese Butter Burger',
//       price: 75.66,
//       isNew: true,
//       discount: '5%'
//     },
//   ]

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
  

  export const productData:ProductType[] = [
    {
        id: '1',
        name: 'Giày thể thao (Sneaker) Nam Giày nam adidas Grand Court Base ART EE7904',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'Trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '2',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 41,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '3',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 42,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '4',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 43,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '5',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '6',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '7',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '8',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '9',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '10',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '11',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '12',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '13',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '14',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '15',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '16',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '17',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '18',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '19',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    },
    {
        id: '20',
        name: 'Giày thể thao (Sneaker) Nam Giày Puma Smash Vulc 359622-05',
        brand: "SKU: E0021",
        price: 75.99,
        thumbnail: [
            product1.src,product2.src,product3.src,product4.src,product5.src
        ],
        condition: 'Giày chính hãng đã qua sử dụng, độ mới 85%.',
        size: 40,
        warn: [
            'trước khi đặt khách hàng nên nhắn trước với shop để xem ảnh chi tiết sản phẩm. Để tránh tình trạng nhận giày không đúng với mong muốn của khách.',
            'Cam kết hoàn tiền 100% nếu phát hiện sản phẩm không phải hàng chính hãng hoặc không giống với cam kết. Shop không áp dụng đổi trả trong trường hợp khách đã sử dụng sản phẩm.',
            'Chính sách bảo hành: Sản phẩm bảo hành keo trong 12 tháng. 1 đổi 1 hoặc hoàn tiền lại trong trường hợp không vừa size hoặc giao nhầm sản phẩm. Nhận vệ sinh giày giá 40k.'
        ],
        type: 'shoes'
    }
    

]