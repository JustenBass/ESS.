puts "Seeding Users...💦"
user1 = User.create!(username: "JBass636")

puts "Seeding Products...💦"
product1 = Product.create!(name: "Nike Dunk High Women's Shoes", img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f0d61cfb-0d85-4d5c-9088-6bae0b15ed04/dunk-high-womens-shoes-LwCxXJ.png',
description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with crisp leather and retro colors. The classic hoops design channels '80s vintage back onto the streets while the padded, high-top collar adds an old-school look rooted to comfort.",
price: 99.97)

product2 = Product.create!(name: "Nike Blazer Mid '77", img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-womens-shoes-NPWfjm.png',
description: "Styled for the ‘70s. Loved in the ‘80s. Classic in the ‘90s. Ready for the future. The Nike Blazer Mid ’77 delivers a timeless design that’s easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like you’ve just pulled them from the history books. Go ahead, perfect your outfit.",
price: 105.00)

puts "Seeding Carts...💦"
cart1 = Cart.create!(user_id: user1.id)
cart2 = Cart.create!()

puts "Seeding Orderables...💦"
Orderable.create!(product_id: product1.id, cart_id: cart1.id, quantity: 8)
Orderable.create!(product_id: product2.id, cart_id: cart2.id, quantity: 2)

puts "Done Seeding...🌷"