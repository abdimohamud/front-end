const strainData = [
    {
      id: 25,
      strain_name: "Alien OG",
      img: "https://images.hytiva.com/Alien-OG.jpg?mw420-mh420",
      rating: 3,
      type: "hybrid",
      description:
        "First available as a clone in California’s Bay Area and now in seed form from Cali Connection, Alien OG is a cross of Tahoe OG and Alien Kush. One of the most potent strains available today, this indica-dominant hybrid has tested as high as 28% THC. Alien OG has the typical lemon-pine “OG” smell and flavor, and an intense high that combines heavy indica body effects and a psychedelic cerebral buzz. Beginners and novices, be sure to take it slow with this heavy-hitter."
    },
    {
      id: 31,
      strain_name: "Alien Technology",
      img:
      "https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fproducts%2Fphotos%2FOf5OglzbSAS9bNE5Z7wl_alien-technology-1.jpg?ixlib=rails-4.0.0&w=490&h=490&fit=crop&bg=FFFFFF&fm=jpg&q=80&s=79c28a654d1a39f0599013cac243f578",
      rating: 3,
      type: "indica",
      description:
        "Very little is known about Alien Technology other than it is a landrace strain selected from a handful of seeds acquired by breeder OBSoul33t from a US soldier returning from Afghanistan. It is a pure indica that features light green buds, incredible trichome production, and a spicy, hashy flavor/aroma with fuel undertones. Reports indicate that the high is more stimulating than your typical indica, while lasting as long as 6 hours. Alien Technology has been used in breeding some of today’s most potent hybrids such as Alien Dawg and Alien Kush."
    },
    {
      id: 41,
      strain_name: "Alpha OG",
      img: "https://images.hytiva.com/Alpha-Og.jpg?mw420-mh420",
      rating: 3,
      type: "sativa",
      description:
        "Alpha OG from Alpha Medic is an OG Kush phenotype that took 2nd place in the 2014 Los Angeles Cannabis Cup. Its thick layer of crystal trichomes helps to explain why this pungent, pine-scented strain consistently tests over 20% THC when grown optimally. Conditions best treated with high-THC strains like Alpha OG include sleep apnea, appetite and weight loss, nausea, and chronic pain. "
    },
    {
      id: 54,
      strain_name: "Ancient OG",
      img: "https://images.hytiva.com/Ancient-Og.jpg?mw420-mh420",
      rating: 3,
      type: "indica",
      description:
        "Ancient OG from Bodhi Seeds is a mostly indica strain descended from an Iranian landtype and Snow Lotus. Its thickly resinous buds exude aromatic notes of earthy pine and sweet citrus that are fully realized in Ancient OG’s taste. This high-yielding indica is best suited for sea of green gardens and has a 70 day flowering time. Outdoor cultivators should prepare for harvest in the month of October."
    },
    {
      id: 56,
      strain_name: "Angel OG",
      img: "https://images.hytiva.com/Hells-Angel-Og.jpg?mw420-mh420",
      rating: 3,
      type: "hybrid",
      description:
        "Angel OG is a fruity Kush cross that drapes the body in mellow effects from head to toe. This strain's OG Kush x Blackberry lineage gives the buds an aroma of earth, pine, and sweetness while supplying the consumer with potent physical effects. The strong relaxing properties of Angel OG are ideal for patients suffering from chronic physical pain, insomnia, and stress."
    },
    {
      id: 58,
      strain_name: "Anonymous OG",
      img: "https://images.hytiva.com/Anonymous-Og.jpg?mw420-mh420",
      rating: 3,
      type: "sativa",
      description:
        "The 3C Anonymous OG greets the nose with distinctive woodsy, citrus, diesel scent that indica connoisseurs all know and love. Anonymous OG is a 3C Farms select cut of 3C Kushishima. Its round dense buds are wrapped in deep green calyxes that drip with resin and glitter with trichomes. The flavor is deep, satisfying the most refined palate. This strain is incredibly relaxing and sedative, and should be consumed in the evening for best results. "
    },
    {
      id: 78,
      strain_name: "Aspen OG",
      img:
      "https://media.allbud.com/resized/800x600xfit-nonupscale/media/images/strain/aspen-og/2167/nesbgfp6jox4pkentnke.jpg?t=ec0d863568db0bd0e18d3c788e2fb06765c64876de24c47d1469dc18fee697a9",
      rating: 3,
      type: "hybrid",
        description:
        "Aspen OG by 303 Seeds is a testament to how rich the Rocky’s cannabis heritage really is. This Sour Cream and SFV OG cross “is sweet like Aspen in the summer and coated white like Aspen in the winter,” topped with glistening trichomes that shimmer like snow. Aspen OG combines physical elements from each parent to easily curb moderate pain and stimulate the appetite. Expect earthy flavors with a sweet berry undertone.  "
    },
    {
      id: 98,
      strain_name: "BOG Bubble",
      img:
      "https://media.allbud.com/resized/800x600xfit-nonupscale/media/feature/flower/lemon-topaz-2114.jpg?t=b52bb292e792b88de1a03d6d1871e307c304986cdcd948c0aad0700a82a0701f",
      rating: 3,
      type: "sativa",
      description:
        "BOG Bubble is an indica-dominant hybrid bred by B.O.G. Seeds. These frosty, sticky buds offer a sweet, bubblegum aroma and deliver long-lasting, uplifting effects. Grows are successful indoor or outdoor, flowering between 45 and 50 days."
    },
    {
      id: 105,
      strain_name: "Banana OG",
      img: "https://images.hytiva.com/Banana-Og.jpg?mw420-mh420",
      rating: 3,
      type: "indica",
      description:
        "Banana OG is an indica-dominant cross between OG Kush and Banana. With a smell and flavor of overripe bananas, this hybrid definitely earns its name. Banana OG has tested at over 25% THC and has a reputation as a “creeper,” leaving those who over-imbibe in a near comatose state before intense hunger and sleepiness sets in. Patients treating muscular pain, loss of appetite, and insomnia may benefit from Banana OG."
    },
    {
      id: 112,
      strain_name: "Batman OG",
      img: "https://images.hytiva.com/Batman-OG.jpg?mw420-mh420",
      rating: 3,
      type: "indica",
      description:
        "Batman OG, named for the Caped Crusader of the DC Universe, is a potent indica that hits the body like POW! This knockout strain binds the consumer to the couch and offers relaxing physical effects that are calming and sedative. Batman OG has deep earthy notes intermixed with scents of skunk and pine. It combats insomnia, stress, and chronic pain so well, it will have you saying, “Holy indica, Batman!”  "
    }
  ];
  export default strainData;