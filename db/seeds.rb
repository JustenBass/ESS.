puts "Seeding Users...💦"
user1 = User.create!(username: "JBass636", password: 'jb', password_confirmation: 'jb')
puts "Seeding Users...💦"
user2 = User.create!(username: "J", password: 'jb', password_confirmation: 'jb')




# puts "Seeding Carts...💦"
# cart1 = Cart.create!()





puts "Seeding Products...💦"
product1 = Product.create!(name: "IGNITE ELEVATE Spikeless Golf Shoes", img: 'https://www.pumagolf.com/cdn/shop/products/ikssc9e9bqb5y2yjlstf_170d408b-7f31-4f3c-8ea5-51922fb845e9.jpg?v=1702998649',
description: "The IGNITE ELEVATE will raise your game to the next level providing you with incredible comfort and superb style. So tee-it-up with confidence no matter where the shoes may take you.",
price: 108.00)

product2 = Product.create!(name: "Women's AVANT Spikeless Golf Shoes", img: 'https://www.pumagolf.com/cdn/shop/files/q11pr1uljvppbg4zlwmf.jpg?v=1709674557',
description: "Built for the future. PUMA AVANT offers a classic style with modern performance details.",
price: 110.00)

product3 = Product.create!(name:'" High Fashion Bookstack Padded Bag " Print on', img: 'https://assets.wfcdn.com/im/73811701/resize-h445%5Ecompr-r85/6128/61282291/%22+High+Fashion+Bookstack+Padded+Bag+%22+Print+on.jpg',
description: "Ideal for the fashion aficionado, this on-trend graphic art print brings a stunningly glam vibe to any room in your home. Reproduced from an original work, it features a dazzling pink handbag resting on top of a stack of books with some of the most well-known fashion brand names on the spines. This piece is printed on a square surface to create a look that rivals
any gallery. And, with multiple sizes available, you can find just the right one to suit your space.",
price: 41.00)

product4 = Product.create!(name:'Bisou Accent Chair', img: 'https://cb.scene7.com/is/image/Crate/BisouChairNoelleSand3QSSF23/$web_pdp_main_carousel_high$/240201142806/bisou-accent-chair.jpg',
description: "Named after the French word for kiss, our Bisou chair is a loving tribute to both vintage and contemporary European style. Bentwood ash veneer finished in a warm honey tone curves the striking, heart-shaped arms. Set within the embrace of the playful frame, a sculptural cushion shapes the super-comfortable all-in-one seat and back. The off-white, wool-blend fabric lends dimension and touch-me texture.
Bisou's bold silhouette belies its petite scale, making the accent chair easy to use in pairs.",
price: 999.00)




# puts "Seeding OrderItems...💦"
# Order.create!(product_id: product1.id, cart_id: cart1.id, quantity: 4)
# Order.create!(product_id: product2.id, cart_id: cart1.id, quantity: 3)





puts "Done Seeding...🌷"