const fs = require('fs')
const path = require('path')

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe("index.js", () => {
  describe("defines saturdayFun function as specified", function() {
    it("function exists", function() {
      expect(saturdayFun).to.exist
    })

    it("is defined using function declaration", function() {
      expect(js).to.match(/function saturdayFun/, "Expected saturdayFun to be defined using function declaration")
    })

    it("uses the default argument 'roller-skate' when no arguments are passed", function() {
      expect(saturdayFun()).to.equal("This Saturday, I want to roller-skate!")
    })

    it("permits the default argument to be overriden", function() {
      expect(saturdayFun("bathe my dog")).to.equal("This Saturday, I want to bathe my dog!")
    })
  })

  describe("defines mondayWork function as specified", function() {
    it("function exists", function() {
      expect(mondayWork).to.exist
    })

    it("is defined using function declaration", function() {
      expect(js).to.match(/function mondayWork/, "Expected saturdayFun to be defined using function declaration")
    })

    it("uses the default argument 'go to the office' when no arguments are passed", function() {
      expect(mondayWork()).to.equal("This Monday, I will go to the office")
    })

    it("permits the default argument to be overriden", function() {
      expect(mondayWork("work from home")).to.equal("This Monday, I will work from home")
    })
  })

  describe("defines wednesdaySleep function as specified", function() {
    it("function exists", function() {
      expect(wednesdaySleep).to.exist
    })

    it("is defined using function expression", function() {
      expect(js).to.match(/wednesdaySleep\s*=\s*function/, "Expected saturdayFun to be defined using function expression")
    })

    it("uses the default arguments 'very tired' and 'early' respectively when no arguments are passed", function() {
      expect(wednesdaySleep()).to.equal("Every Wednesday, I am very tired after work. I will usually go to bed early")
    })

    it("permits the default arguments to be overriden", function() {
      expect(wednesdaySleep("not that tired", "at my normal time")).to.equal("Every Wednesday, I am not that tired after work. I will usually go to bed at my normal time")
    })
  })

  describe("defines favoriteDay function as specified", function() {
    it("function exists", function() {
      expect(favoriteDay).to.exist
    })

    it("uses the default argument 'Saturday' when no arguments are passed", function() {
      expect(favoriteDay()).to.equal("Who doesn't love the weekend! I especially love Saturday")
    })

    it("permits the default arguments to be overriden", function() {
      expect(favoriteDay('Sunday')).to.equal("Who doesn't love the weekend! I especially love Sunday")
    })

    it("returns a different string if the argument is a weekday", function() {
      expect(favoriteDay('Friday')).to.equal("I actually prefer weekdays, specifically Friday")
    })
  })
})
