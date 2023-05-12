`mutation MyMutation {
    insert_user(objects: [
      {
        first_name: "Catherine",
        last_name: "Baker",
        gender: "Male",
        user_tracking: { data: { lat: "17.411822", lng: "78.4768582" } }
      },
      {
        first_name: "Frederick",
        last_name: "Williams",
        gender: "Male",
        user_tracking: { data: { lat: "17.4137034", lng: "78.4767344" } }
      },
      {
        first_name: "Tyler",
        last_name: "Cooper",
        gender: "Male",
        user_tracking: { data: { lat: "17.4100271", lng: "78.470697" } }
      },
      {
        first_name: "Edwin",
        last_name: "Roberts",
        gender: "Male",
        user_tracking: { data: { lat: "17.4103285", lng: "78.4704912" } }
      },
      {
        first_name: "Carl",
        last_name: "Brown",
        gender: "Male",
        user_tracking: { data: { lat: "17.4113715", lng: "78.4717473" } }
      },
      {
        first_name: "Ted",
        last_name: "Moore",
        gender: "Male",
        user_tracking: { data: { lat: "17.4179311", lng: "78.4795239" } }
      },
      {
        first_name: "Annabella",
        last_name: "Hamilton",
        gender: "Male",
        user_tracking: { data: { lat: "17.405855", lng: "78.473494" } }
      },
      {
        first_name: "Daryl",
        last_name: "Spencer",
        gender: "Male",
        user_tracking: { data: { lat: "17.407233", lng: "78.474584" } }
      },
      {
        first_name: "Madaline",
        last_name: "Cameron",
        gender: "Male",
        user_tracking: { data: { lat: "17.436696", lng: "78.463324" } }
      },
      {
        first_name: "Mike",
        last_name: "Murray",
        gender: "Female",
        user_tracking: { data: { lat: "17.433913", lng: "78.46043" } }
      },
      {
        first_name: "Elise",
        last_name: "Roberts",
        gender: "Female",
        user_tracking: { data: { lat: "17.432083", lng: "78.459136" } }
      },
      {
        first_name: "Robert",
        last_name: "Smith",
        gender: "Female",
        user_tracking: { data: { lat: "17.442076", lng: "78.478149" } }
      },
      {
        first_name: "Haris",
        last_name: "Brown",
        gender: "Female",
        user_tracking: { data: { lat: "17.441033", lng: "78.475983" } }
      },
      {
        first_name: "Wilson",
        last_name: "Grant",
        gender: "Female",
        user_tracking: { data: { lat: "17.439917", lng: "78.48284" } }
      },
      {
        first_name: "Kellan",
        last_name: "Hall",
        gender: "Female",
        user_tracking: { data: { lat: "17.441158", lng: "78.484208" } }
      },
      {
        first_name: "Jacob",
        last_name: "Mitchell",
        gender: "Male",
        user_tracking: { data: { lat: "17.442114", lng: "78.49435" } }
      },
      {
        first_name: "Alen",
        last_name: "Cunningham",
        gender: "Male",
        user_tracking: { data: { lat: "17.436675", lng: "78.492291" } }
      },
      {
        first_name: "Kevin",
        last_name: "Fowler",
        gender: "Male",
        user_tracking: { data: { lat: "17.439038", lng: "78.48317" } }
      },
      {
        first_name: "Briony",
        last_name: "Morrison",
        gender: "Male",
        user_tracking: { data: { lat: "17.390284", lng: "78.512328" } }
      },
      {
        first_name: "Ted",
        last_name: "Andrews",
        gender: "Male",
        user_tracking: { data: { lat: "17.382482", lng: "78.511865" } }
      }
    ]) {
      returning {
        id
        user_tracking {
          user_id
        }
      }
    }
  }
  `