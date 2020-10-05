

const theData = [ {
    strain_name: '100-Og',
    type: 'hybrid',
    rating: 4,
    effects: 'Creative,Energetic,Tingly,Euphoric,Relaxed',
    flavors: 'Earthy,Sweet,Citrus',
   description: '$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side.'
  },
  {
    strain_name: '98-White-Widow',
    type: 'hybrid',
    rating: 4.7,
    effects: 'Relaxed,Aroused,Creative,Happy,Energetic',
    flavors: 'Flowery,Violet,Diesel',
   description: 'The ‘98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. ‘98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakalōlō Seed Bank.'
  },
  {
    strain_name: 1024,
    type: 'sativa',
    rating: 4.4,
    effects: 'Uplifted,Happy,Relaxed,Energetic,Creative',
    flavors: 'Spicy/Herbal,Sage,Woody',
   description: '1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense.'
  },
  {
    strain_name: '13-Dawgs',
    type: 'hybrid',
    rating: 4.2,
    effects: 'Tingly,Creative,Hungry,Relaxed,Uplifted',
    flavors: 'Apricot,Citrus,Grapefruit',
   description: '13 Dawgs is a hybrid of G13 and Chemdawg genetics bred by Canadian LP Delta 9 BioTech. The two potent strains mix to create a balance between indica and sativa effects. 13 Dawgs has a sweet earthy musk that brings a blend of woody citrus flavors. The effects of 13 Dawgs induce a happy, relaxed body buzz with a creative and focused mind that counters depression and stimulates the appetite.'
  },
  {
    strain_name: '24K-Gold',
    type: 'hybrid',
    rating: 4.6,
    effects: 'Happy,Relaxed,Euphoric,Uplifted,Talkative',
    flavors: 'Citrus,Earthy,Orange',
   description: 'Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users!'
  },
  {
    strain_name: '3-Bears-Og',
    type: 'indica',
    rating: 0,
    effects: 'None',
    flavors: 'None',
   description: '3 Bears OG by Mephisto Genetics is an autoflowering cross of Bear OG, Karma’s OG Cut, and Triangle Kush. This indica-dominant strain generates pungent, flavorful buds in a smaller, more manageable plant size. Mephisto Genetics describes 3 Bears OG as a cornerstone to their artisanal collection, blending the best attributes of the fabled OG Kush with a compact, controllable growth structure. The 3 Bears OG has an approximate 70-day growth cycle and offers effects that stimulate the appetite while leading the body toward sleep.'
  },
  {
    strain_name: '3-Kings',
    type: 'hybrid',
    rating: 4.4,
    effects: 'Relaxed,Euphoric,Happy,Uplifted,Hungry',
    flavors: 'Earthy,Sweet,Pungent',
   description: 'The 3 Kings marijuana strain, a holy trinity of Headband, Sour Diesel, and OG Kush, is a sativa-dominant hybrid and genetic masterpiece. Sour tanginess reek from the sage green buds, and its frosty coat gives you a fair warning of the 3 Kings’ potency. Medical patients will appreciate the versatility of this strain’s medicinal effects as it relieves pain, stress, and nausea without heavy sedation.'
  },
  {
    strain_name: '303-Og',
    type: 'indica',
    rating: 4.2,
    effects: 'Relaxed,Happy,Euphoric,Uplifted,Giggly',
    flavors: 'Citrus,Pungent,Earthy',
   description: 'The indica-dominant 303 OG is a Colorado strain bred by crossing Pre-98 Bubba Kush and Chemdawg. Its parent strains pass on a complex flavor profile of coffee and spice with diesel undertones. Its buzz can be described as social and creative, a dreamy experience perfect for letting off steam at the end of the work day. The happy euphoria induced by 303 OG may help patients treating depression, anxiety, and stress disorders.'
  },
  {
    strain_name: '3D-Cbd',
    type: 'sativa',
    rating: 4.6,
    effects: 'Uplifted,Focused,Happy,Talkative,Relaxed',
    flavors: 'Earthy,Woody,Flowery',
   description: '3D CBD from Snoop Dogg’s branded line of cannabis strains was crafted with patients in mind. With a THC:CBD ratio of about 5:8, this earthy-flavored sativa is preferred for treating pain, inflammation, and muscle tension. Consumers susceptible to THC-induced anxiety may also appreciate the sobering, relaxing balance CBD has to offer.'
  },
  {
    strain_name: '3X-Crazy',
    type: 'indica',
    rating: 4.4,
    effects: 'Relaxed,Tingly,Happy,Euphoric,Uplifted',
    flavors: 'Earthy,Grape,Sweet',
   description: 'Also known as Optimus Prime, the indica-dominant 3X Crazy is a three-way cross between OG Kush, Bubba Kush, and Granddaddy Purple. Its aroma is comprised of sweet grape, spicy pepper, and earthy notes passed on by its Bubba Kush parent. This indica will leave you sedated with soothing full-body effects, but not before a brief phase of clear-headed cerebral psychoactivity. The relaxing effects induced by 3X Crazy can be used to treat a variety of severe symptoms, some of which include pain, spasms, tension, and insomnia.'
  },
  {
    strain_name: '3Rd-Coast-Panama-Chunk',
    type: 'hybrid',
    rating: 4.7,
    effects: 'Energetic,Happy,Talkative,Uplifted',
    flavors: 'Pine,Diesel',
   description: '3rd Coast Panama Chunk by Bedford Grow is a cross between East Coast Panama Chunk (Panama F7 x Deep Chunk) and Sour Diesel. This vigorous strain creates dense, resinous buds that reek of pine and fuel. Panama Chunk is a potent and versatile hybrid that provides immediate mood elevation and stress relief, making it ideal after a long day. The strain’s varied cerebral and physical effects help consumers abate anxiety and insomnia while also tending to migraines and muscular pain.'
  },
  {
    strain_name: '501St-Og',
    type: 'hybrid',
    rating: 4.5,
    effects: 'Relaxed,Euphoric,Sleepy,Happy,Talkative',
    flavors: 'Earthy,Pine,Skunk',
   description: '501st OG, bred by Rare Dankness, is an indica-dominant hybrid that crosses Skywalker OG with Rare Dankness #1. The colorful flowers are tinged with a wide spectrum of green, blue, red, and purple hues that give off a deep piney kush aroma that mixes with the sweetness of grape flavors. The potent indica effects make 501st OG a great nighttime strain to help with pain relief and trouble sleeping.'
  },
  {
    strain_name: '5Th-Element',
    type: 'indica',
    rating: 4.4,
    effects: 'Relaxed,Focused,Euphoric,Uplifted,Aroused',
    flavors: 'Earthy,Woody,Pine',
   description: 'Elemental Seeds crossed Blackberry with All Spark OG to create this impressive strain. 5th Element produces huge yields of sticky buds that feature a powerful earthy, lemony smell and flavor. The effects are quite strong with a good mix of cerebral and body highs.'
  },
  {
    strain_name: '707-Headband',
    type: 'hybrid',
    rating: 4.3,
    effects: 'Euphoric,Happy,Uplifted,Talkative,Creative',
    flavors: 'Earthy,Woody,Pungent',
   description: 'This strain emerged from the Humboldt County, California and that area’s telephone area code is the source of its numerical moniker. It’s a cross between Sour Diesel, OG Kush and Master Kush. 707 Headband plants flower in 9 to 11 weeks and usually have large yields. An indica dominant hybrid, this strain is known to have high THC levels and can be strong, but it’s balanced enough to leave most users feeling “heady” and creative rather than sleepy. Because of this, it’s often used to treat tension and anxiety.'
  },
  {
    strain_name: '8-Ball-Kush',
    type: 'indica',
    rating: 4.3,
    effects: 'Relaxed,Uplifted,Happy,Creative,Euphoric',
    flavors: 'Citrus,Earthy,Pine',
   description: 'Bred by Barney’s Farm, 8 Ball Kush is a pure indica variety descended from an Afghani landrace strain. Like many other cannabis varieties that come from the Hindu Kush region, 8 Ball Kush produces large amounts of crystal resin that blanket the buds. Its aroma is earthy and spicy, and you may find its effects to be more cerebrally stimulating than the average indica. A hardy and resilient plant, 8 Ball Kush has a 50 to 60 day flowering time indoors while outdoor gardens finish at the end of September.'
  },
  {
    strain_name: '818-Og',
    type: 'indica',
    rating: 4.7,
    effects: 'Relaxed,Happy,Euphoric,Giggly,Sleepy',
    flavors: 'Earthy,Diesel,Flowery',
   description: 'Named after the telephone area code of the San Fernando Valley in Los Angeles, 818 OG is an OG Kush strain popular with patients for treating pain, loss of appetite, and insomnia. Not to be confused with the other OG cut named for the locale, the 818 OG has a very fruity flavor that is quite different from the sour, earthy fuel taste found in the SFV OG.'
  },
  {
    strain_name: '831-Og',
    type: 'indica',
    rating: 5,
    effects: 'None',
    flavors: 'None',
   description: '831 OG, aka Santa Cruz OG, is an indica-dominant strain developed by 831 Organiks. Created by crossing the rare and potent Inferno F1 cut with the West Coast mainstay, SFV OG, this combination of heavyweight indicas imbues consumers with deep relaxation that borders on sleepy, especially with continued consumption. The aroma is pure fuel while the flavor opens up with notes of pine, earth, and lemon. Enjoy this strain near the end of the day, but beware, this strain has been known to reach toward 30% THC.'
  },
  {
    strain_name: '9-Pound-Hammer',
    type: 'indica',
    rating: 4.5,
    effects: 'Relaxed,Sleepy,Euphoric,Happy,Hungry',
    flavors: 'Earthy,Sweet,Berry',
   description: '9 Pound Hammer is an 80% indica strain that crosses Gooberry, Hells OG, and Jack the Ripper. These dense buds are coated in resin, offering sweet grape and lime flavors. True to its indica dominance, effects are heavy and long-lasting, useful for pain and stress relief. Best grown indoors, 9 Pound Hammer will deliver a heavy yield, flowering between 50 and 60 days.'
  },
  {
    strain_name: '91-Krypt',
    type: 'indica',
    rating: 4.7,
    effects: 'Relaxed,Euphoric,Happy,Hungry,Uplifted',
    flavors: 'Earthy,Pungent,Berry',
   description: '91 Krypt by DNA Genetics is a potent strain by many names. Bred from the Chemdawg ‘91 stock crossed with DNA’s famous Captain Krypt OG, this strain was created for high potency cannabis consumers. It emits a deep, dank terpene profile that fills the room with skunk and swampy earth. With a THC content pushing over 20% on average, enjoy 91 Krypt to stimulate appetite while harnessing full body relaxation.'
  },
  {
    strain_name: 'A-10',
    type: 'indica',
    rating: 3.8,
    effects: 'Relaxed,Focused,Happy,Sleepy,Uplifted',
    flavors: 'Citrus,Pungent,Sweet',
   description: 'A-10 has an earthy, hashy taste that provides a very heavy body stone. Frequently used to treat insomnia and chronic pain.'
  }]
const mapped = [...theData]
mapped.forEach((o) => o.rating =  o.rating.toFixed(0));
mapped.forEach((o, i) => o[0] = i + 1);
const strains = mapped.map(item  => {
  return {user_id:item[0], strain_name:item.strain_name, type:item.type, rating:item.rating, effects:item.effects, flavors: item.flavors, description: item.description}
})
  
export default strains;