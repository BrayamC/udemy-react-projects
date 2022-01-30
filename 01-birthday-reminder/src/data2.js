const holidays = [
  {
    "date": "1/1/22",
    "Day": "Saturday",
    "Name": "New Year's Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/new-year-day"
  },
  {
    "date": "1/13/22",
    "Day": "Thursday",
    "Name": "Stephen Foster Memorial Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/stephen-foster-memorial-day"
  },
  {
    "date": "1/17/22",
    "Day": "Monday",
    "Name": "Martin Luther King Jr. Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/martin-luther-king-day"
  },
  {
    "date": "1/29/22",
    "Day": "Saturday",
    "Name": "Kansas Day",
    "Type": "State Observation",
    "Url": "https://www.timeanddate.com/holidays/us/kansas-day"
  },
  {
    "date": "2/1/22",
    "Day": "Tuesday",
    "Name": "National Freedom Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-freedom-day"
  },
  {
    "date": "2/1/22",
    "Day": "Tuesday",
    "Name": "Lunar New Year",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/lunar-new-year"
  },
  {
    "date": "2/1/22",
    "Day": "Tuesday",
    "Name": "First Day of Black History Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-black-history-month"
  },
  {
    "date": "2/2/22",
    "Day": "Wednesday",
    "Name": "Groundhog Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/groundhog-day"
  },
  {
    "date": "2/4/22",
    "Day": "Friday",
    "Name": "National Wear Red Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-wear-red-day"
  },
  {
    "date": "2/13/22",
    "Day": "Sunday",
    "Name": "Super Bowl",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/super-bowl"
  },
  {
    "date": "2/14/22",
    "Day": "Monday",
    "Name": "Valentine's Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/valentine-day"
  },
  {
    "date": "2/21/22",
    "Day": "Monday",
    "Name": "Presidents' Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/washington-birthday"
  },
  {
    "date": "3/1/22",
    "Day": "Tuesday",
    "Name": "Shrove Tuesday/Mardi Gras",
    "Type": "Observance, Christian",
    "Url": "https://www.timeanddate.com/holidays/us/shrove-tuesday"
  },
  {
    "date": "3/1/22",
    "Day": "Tuesday",
    "Name": "St. David's Day",
    "Type": "Observance, Christian",
    "Url": "https://www.timeanddate.com/holidays/us/st-david-day"
  },
  {
    "date": "3/1/22",
    "Day": "Tuesday",
    "Name": "First Day of Women's History Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-womens-history-month"
  },
  {
    "date": "3/1/22",
    "Day": "Tuesday",
    "Name": "First Day of Irish American Heritage Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-irish-american-heritage-month"
  },
  {
    "date": "3/2/22",
    "Day": "Wednesday",
    "Name": "Read Across America Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/read-across-america-day"
  },
  {
    "date": "3/4/22",
    "Day": "Friday",
    "Name": "Employee Appreciation Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/employee-appreciation-day"
  },
  {
    "date": "3/17/22",
    "Day": "Thursday",
    "Name": "St. Patrick's Day",
    "Type": "Observance, Christian",
    "Url": "https://www.timeanddate.com/holidays/us/st-patrick-day"
  },
  {
    "date": "3/20/22",
    "Day": "Sunday",
    "Name": "March Equinox",
    "Type": "Season",
    "Url": "https://www.timeanddate.com/calendar/march-equinox.html"
  },
  {
    "date": "3/29/22",
    "Day": "Tuesday",
    "Name": "National Vietnam War Veterans Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-vietnam-war-veterans-day"
  },
  {
    "date": "3/30/22",
    "Day": "Wednesday",
    "Name": "Doctors' Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/doctors-day"
  },
  {
    "date": "4/6/22",
    "Day": "Wednesday",
    "Name": "National Tartan Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-tartan-day"
  },
  {
    "date": "4/12/22",
    "Day": "Tuesday",
    "Name": "National Library Workers' Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-library-workers-day"
  },
  {
    "date": "4/13/22",
    "Day": "Wednesday",
    "Name": "Thomas Jefferson's Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/thomas-jefferson-birthday"
  },
  {
    "date": "4/17/22",
    "Day": "Sunday",
    "Name": "Easter Sunday",
    "Type": "Observance, Christian",
    "Url": "https://www.timeanddate.com/holidays/us/easter-sunday"
  },
  {
    "date": "4/18/22",
    "Day": "Monday",
    "Name": "Easter Monday",
    "Type": "Observance, Christian",
    "Url": "https://www.timeanddate.com/holidays/us/easter-monday"
  },
  {
    "date": "4/18/22",
    "Day": "Monday",
    "Name": "Tax Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/tax-day"
  },
  {
    "date": "4/18/22",
    "Day": "Monday",
    "Name": "Boston Marathon",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/boston-marathon"
  },
  {
    "date": "4/27/22",
    "Day": "Wednesday",
    "Name": "Administrative Professionals Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/administrative-professionals-day"
  },
  {
    "date": "4/28/22",
    "Day": "Thursday",
    "Name": "Take our Daughters and Sons to Work Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/take-our-daughters-and-sons-to-work-day"
  },
  {
    "date": "5/1/22",
    "Day": "Sunday",
    "Name": "Law Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/law-day"
  },
  {
    "date": "5/1/22",
    "Day": "Sunday",
    "Name": "Loyalty Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/loyalty-day"
  },
  {
    "date": "5/1/22",
    "Day": "Sunday",
    "Name": "First Day of Asian Pacific American Heritage Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-asian-pacific-american-heritage-month"
  },
  {
    "date": "5/1/22",
    "Day": "Sunday",
    "Name": "First Day of Jewish American Heritage Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-jewish-american-heritage-month"
  },
  {
    "date": "5/5/22",
    "Day": "Thursday",
    "Name": "Cinco de Mayo",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/cinco-de-mayo"
  },
  {
    "date": "5/5/22",
    "Day": "Thursday",
    "Name": "National Day of Prayer",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-day-prayer"
  },
  {
    "date": "5/6/22",
    "Day": "Friday",
    "Name": "Kentucky Oaks",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/kentucky-oaks"
  },
  {
    "date": "5/6/22",
    "Day": "Friday",
    "Name": "National Nurses Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-nurses-day"
  },
  {
    "date": "5/6/22",
    "Day": "Friday",
    "Name": "Military Spouse Appreciation Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/military-spouse-appreciation-day"
  },
  {
    "date": "5/7/22",
    "Day": "Saturday",
    "Name": "Kentucky Derby",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/kentucky-derby"
  },
  {
    "date": "5/7/22",
    "Day": "Saturday",
    "Name": "National Explosive Ordnance Disposal (EOD) Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-explosive-ordnance-disposal-day"
  },
  {
    "date": "5/8/22",
    "Day": "Sunday",
    "Name": "Mother's Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/mothers-day"
  },
  {
    "date": "5/8/22",
    "Day": "Sunday",
    "Name": "Victory in Europe Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/victory-in-europe-day"
  },
  {
    "date": "5/15/22",
    "Day": "Sunday",
    "Name": "Peace Officers Memorial Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/peace-officers-memorial-day"
  },
  {
    "date": "5/20/22",
    "Day": "Friday",
    "Name": "National Defense Transportation Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-defense-transportation-day"
  },
  {
    "date": "5/21/22",
    "Day": "Saturday",
    "Name": "Armed Forces Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/armed-forces-day"
  },
  {
    "date": "5/21/22",
    "Day": "Saturday",
    "Name": "Preakness Stakes",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/preakness-stakes"
  },
  {
    "date": "5/22/22",
    "Day": "Sunday",
    "Name": "National Maritime Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-maritime-day"
  },
  {
    "date": "5/25/22",
    "Day": "Wednesday",
    "Name": "Emergency Medical Services for Children Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/medical-service-children-day"
  },
  {
    "date": "5/25/22",
    "Day": "Wednesday",
    "Name": "National Missing Children's Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-missing-children-day"
  },
  {
    "date": "5/30/22",
    "Day": "Monday",
    "Name": "Memorial Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/memorial-day"
  },
  {
    "date": "6/1/22",
    "Day": "Wednesday",
    "Name": "First Day of Pride Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-pride-month"
  },
  {
    "date": "6/1/22",
    "Day": "Wednesday",
    "Name": "First Day of Caribbean-American Heritage Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-caribbean-american-heritage-month"
  },
  {
    "date": "6/6/22",
    "Day": "Monday",
    "Name": "D-Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/d-day"
  },
  {
    "date": "6/11/22",
    "Day": "Saturday",
    "Name": "Belmont Stakes",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/belmont-stakes"
  },
  {
    "date": "6/12/22",
    "Day": "Sunday",
    "Name": "Loving Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/loving-day"
  },
  {
    "date": "6/14/22",
    "Day": "Tuesday",
    "Name": "Army Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/army-birthday"
  },
  {
    "date": "6/14/22",
    "Day": "Tuesday",
    "Name": "Flag Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/flag-day"
  },
  {
    "date": "6/19/22",
    "Day": "Sunday",
    "Name": "Father's Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/fathers-day"
  },
  {
    "date": "6/19/22",
    "Day": "Sunday",
    "Name": "Juneteenth",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/juneteenth"
  },
  {
    "date": "6/19/22",
    "Day": "Sunday",
    "Name": "Juneteenth Independence Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/juneteenth"
  },
  {
    "date": "6/20/22",
    "Day": "Monday",
    "Name": "Day off for Juneteenth",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/juneteenth"
  },
  {
    "date": "6/20/22",
    "Day": "Monday",
    "Name": "American Eagle Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/american-eagle-day"
  },
  {
    "date": "6/21/22",
    "Day": "Tuesday",
    "Name": "June Solstice",
    "Type": "Season",
    "Url": "https://www.timeanddate.com/calendar/june-solstice.html"
  },
  {
    "date": "7/4/22",
    "Day": "Monday",
    "Name": "Independence Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/independence-day"
  },
  {
    "date": "7/14/22",
    "Day": "Thursday",
    "Name": "Bastille Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/bastille-day"
  },
  {
    "date": "7/16/22",
    "Day": "Saturday",
    "Name": "Rural Transit Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/rural-transit-day"
  },
  {
    "date": "7/24/22",
    "Day": "Sunday",
    "Name": "Parents' Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/parents-day"
  },
  {
    "date": "7/27/22",
    "Day": "Wednesday",
    "Name": "National Korean War Veterans Armistice Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-korean-war-veterans-armistice-day"
  },
  {
    "date": "8/4/22",
    "Day": "Thursday",
    "Name": "Coast Guard Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/coast-guard-birthday"
  },
  {
    "date": "8/4/22",
    "Day": "Thursday",
    "Name": "Barack Obama Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/barack-obama-day"
  },
  {
    "date": "8/7/22",
    "Day": "Sunday",
    "Name": "Purple Heart Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/purple-heart-day"
  },
  {
    "date": "8/19/22",
    "Day": "Friday",
    "Name": "National Aviation Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-aviation-day"
  },
  {
    "date": "8/21/22",
    "Day": "Sunday",
    "Name": "National Senior Citizens Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/senior-citizens-day"
  },
  {
    "date": "8/26/22",
    "Day": "Friday",
    "Name": "Women's Equality Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/women-equality-day"
  },
  {
    "date": "9/5/22",
    "Day": "Monday",
    "Name": "Labor Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/labor-day"
  },
  {
    "date": "9/10/22",
    "Day": "Saturday",
    "Name": "Carl Garner Federal Lands Cleanup Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/carl-garner-cleanup-day"
  },
  {
    "date": "9/11/22",
    "Day": "Sunday",
    "Name": "First Responders Day",
    "Type": "State Observation",
    "Url": "https://www.timeanddate.com/holidays/us/first-responders-day"
  },
  {
    "date": "9/11/22",
    "Day": "Sunday",
    "Name": "Patriot Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/patriot-day"
  },
  {
    "date": "9/11/22",
    "Day": "Sunday",
    "Name": "National Grandparents Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-grandparents-day"
  },
  {
    "date": "9/16/22",
    "Day": "Friday",
    "Name": "Constitution Day and Citizenship Day observed",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/constitution-citizenship-day"
  },
  {
    "date": "9/16/22",
    "Day": "Friday",
    "Name": "National POW/MIA Recognition Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/pow-mia-recognition-day"
  },
  {
    "date": "9/17/22",
    "Day": "Saturday",
    "Name": "Constitution Day and Citizenship Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/constitution-citizenship-day"
  },
  {
    "date": "9/17/22",
    "Day": "Saturday",
    "Name": "National CleanUp Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-cleanup-day"
  },
  {
    "date": "9/18/22",
    "Day": "Sunday",
    "Name": "Air Force Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/air-force-birthday"
  },
  {
    "date": "9/22/22",
    "Day": "Thursday",
    "Name": "September Equinox",
    "Type": "Season",
    "Url": "https://www.timeanddate.com/calendar/september-equinox.html"
  },
  {
    "date": "9/24/22",
    "Day": "Saturday",
    "Name": "National Public Lands Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-public-lands-day"
  },
  {
    "date": "9/25/22",
    "Day": "Sunday",
    "Name": "Gold Star Mother's Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/gold-star-mothers-day"
  },
  {
    "date": "10/3/22",
    "Day": "Monday",
    "Name": "Child Health Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/child-health-day"
  },
  {
    "date": "10/9/22",
    "Day": "Sunday",
    "Name": "Leif Erikson Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/leif-erikson-day"
  },
  {
    "date": "10/10/22",
    "Day": "Monday",
    "Name": "Columbus Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/columbus-day"
  },
  {
    "date": "10/13/22",
    "Day": "Thursday",
    "Name": "Navy Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/navy-birthday"
  },
  {
    "date": "10/15/22",
    "Day": "Saturday",
    "Name": "White Cane Safety Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/white-cane-safety-day"
  },
  {
    "date": "10/15/22",
    "Day": "Saturday",
    "Name": "Sweetest Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/sweetest-day"
  },
  {
    "date": "10/17/22",
    "Day": "Monday",
    "Name": "Boss's Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/boss-day"
  },
  {
    "date": "10/31/22",
    "Day": "Monday",
    "Name": "Halloween",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/halloween"
  },
  {
    "date": "11/1/22",
    "Day": "Tuesday",
    "Name": "First Day of Native American Heritage Month",
    "Type": "Annual monthly observance",
    "Url": "https://www.timeanddate.com/holidays/us/first-day-of-native-american-heritage-month"
  },
  {
    "date": "11/6/22",
    "Day": "Sunday",
    "Name": "New York City Marathon",
    "Type": "Sporting event",
    "Url": "https://www.timeanddate.com/holidays/us/new-york-city-marathon"
  },
  {
    "date": "11/8/22",
    "Day": "Tuesday",
    "Name": "Election Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/election-day"
  },
  {
    "date": "11/10/22",
    "Day": "Thursday",
    "Name": "Marine Corps Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/marine-corps-birthday"
  },
  {
    "date": "11/11/22",
    "Day": "Friday",
    "Name": "Veterans Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/veterans-day"
  },
  {
    "date": "11/24/22",
    "Day": "Thursday",
    "Name": "Thanksgiving Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/thanksgiving-day"
  },
  {
    "date": "11/25/22",
    "Day": "Friday",
    "Name": "Black Friday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/black-friday"
  },
  {
    "date": "11/25/22",
    "Day": "Friday",
    "Name": "Native American Heritage Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/native-american-heritage-day"
  },
  {
    "date": "11/28/22",
    "Day": "Monday",
    "Name": "Cyber Monday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/cyber-monday"
  },
  {
    "date": "12/6/22",
    "Day": "Tuesday",
    "Name": "St Nicholas Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/st-nicholas-day"
  },
  {
    "date": "12/7/22",
    "Day": "Wednesday",
    "Name": "Pearl Harbor Remembrance Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/pearl-harbor-remembrance-day"
  },
  {
    "date": "12/13/22",
    "Day": "Tuesday",
    "Name": "National Guard Birthday",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/national-guard-birthday"
  },
  {
    "date": "12/15/22",
    "Day": "Thursday",
    "Name": "Bill of Rights Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/bill-of-rights-day"
  },
  {
    "date": "12/17/22",
    "Day": "Saturday",
    "Name": "Pan American Aviation Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/pan-american-aviation-day"
  },
  {
    "date": "12/17/22",
    "Day": "Saturday",
    "Name": "Wright Brothers Day",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/wright-brothers-day"
  },
  {
    "date": "12/21/22",
    "Day": "Wednesday",
    "Name": "December Solstice",
    "Type": "Season",
    "Url": "https://www.timeanddate.com/calendar/december-solstice.html"
  },
  {
    "date": "12/24/22",
    "Day": "Saturday",
    "Name": "Christmas Eve",
    "Type": "Observance, Christian",
    "Url": "https://www.timeanddate.com/holidays/us/christmas-eve"
  },
  {
    "date": "12/25/22",
    "Day": "Sunday",
    "Name": "Christmas Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/christmas-day"
  },
  {
    "date": "12/26/22",
    "Day": "Monday",
    "Name": "Kwanzaa (first day)",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/kwanzaa"
  },
  {
    "date": "12/26/22",
    "Day": "Monday",
    "Name": "Day off for Christmas Day",
    "Type": "Federal Holiday",
    "Url": "https://www.timeanddate.com/holidays/us/christmas-day"
  },
  {
    "date": "12/31/22",
    "Day": "Saturday",
    "Name": "New Year's Eve",
    "Type": "Observance",
    "Url": "https://www.timeanddate.com/holidays/us/new-year-eve"
  }
];

export default holidays;