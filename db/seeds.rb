puts "Seeding Users...💦"
user1 = User.create!(username: "JBass636")

puts "Seeding Products...💦"
product1 = Product.create!(name: "IGNITE ELEVATE Spikeless Golf Shoes", img: 'https://www.pumagolf.com/cdn/shop/products/ikssc9e9bqb5y2yjlstf_170d408b-7f31-4f3c-8ea5-51922fb845e9.jpg?v=1702998649',
description: "The IGNITE ELEVATE will raise your game to the next level providing you with incredible comfort and superb style. So tee-it-up with confidence no matter where the shoes may take you.",
price: 108.00)

product2 = Product.create!(name: "Women's AVANT Spikeless Golf Shoes", img: 'https://www.pumagolf.com/cdn/shop/files/q11pr1uljvppbg4zlwmf.jpg?v=1709674557',
description: "Built for the future. PUMA AVANT offers a classic style with modern performance details.",
price: 110.00)

puts "Seeding Carts...💦"
cart1 = Cart.create!(user_id: user1.id)
cart2 = Cart.create!()

puts "Seeding Orderables...💦"
Orderable.create!(product_id: product1.id, cart_id: cart1.id, quantity: 8)
Orderable.create!(product_id: product2.id, cart_id: cart2.id, quantity: 2)

puts "Done Seeding...🌷"