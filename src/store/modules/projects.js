const state = {
  headerTileCopy: 'Go behind the screens and explore what researchers around the country are working on.',
  featuredProjects: [
    {
      name: 'Wind Forecast Improvement',
      longProjectName: 'Wind Forecast Improvement Project 2',
      area: '',
      heroImage: require('@/assets/img/featured-projects/wind-forecast.jpg'),
      projectLead: {
        name: 'Pedro A. Jimenez Munoz',
        organizationName: 'Research Applications Lab Weather Systems & Assessment Program',
        twitter: null,
        thumbnail: require('@/assets/img/featured-projects/scientist-photos/pedro-jimenez.jpg'),
        shortBio: 'Jimenez Munoz, Ph.D. has more than 15 years of experience with mesoscale models like the Weather Research and Forecasting (WRF) model. His experience with mesoscale models goes beyond a user perspective having developed parameterizations to improve the model performance.'
      },
      statData: [
        {
          statName: 'Core Hours',
          statNumber: 10000000,
          iconPath: require('@/assets/icon/core-hours-icon.svg')
        }
      ],
      mainContent: [
        {
          title: 'From Gust Till Dawn: Wind Forecasting',
          body: `<p>The Columbia River Basin in Oregon is a major wind energy supplier to the west coast. While wind is clean and renewable, variable weather conditions cause swings of power. These fluctuations create a need for load balancing, or the dynamic storage and/or release of electrical power, which can be inefficient.</p>

          <p>The turbulent mixing parameterizations in weather models that predict the wind’s behavior are often one-dimensional, limiting important details needed to more accurately predict wind patterns. With Cheyenne’s help, researchers can run models that account for both vertical and horizontal turbulent mixing to better show how winds behave in complex terrain like Oregon.</p>

          <p>Through this project, researchers aim to improve short-term wind forecasting models and atmospheric understanding for better wind-energy efficiency and operations in complex terrain, such as coastlines, mountains, and canyons.</p>`,
          media: require('@/assets/video/featured-project-media/project-turbine-summ.mp4')
        },
        {
          title: 'Reliable Energy, Long-Term Savings',
          body: `<p>
            Wind energy has existed in the US from as early as 1850. And though clean energy has advanced over the years — from powering local utility networks during WWII to installing wind farms across the country  — to rely on it, we must more accurately predict it.</p> 

            <p><strong>Wait, we can’t rely on wind energy?</strong> We can. But wind changes, so sometimes wind turbines create a lot of energy, other times none at all. We need to be able to forecast those inconsistencies.</p>

            <p><strong>Why?</strong> Wind facilities need efficient “Electrical Load Balancing”, a dynamic storage and release of electrical power when the wind starts and stops, respectively.</p>

            <p><strong>Data can improve that?</strong> Yes! Our data creates better techniques to more accurately predict wind patterns. More accurate predictions mean better load balancing.</p> 

            <p><strong>What does that mean for me?</strong> Efficient load balancing and strategic wind farm placement means long-term reliable wind energy and cost savings for businesses and individuals.</p>`,
          media: require('@/assets/video/featured-project-media/project-turbine-soci.mp4')
        }
      ]
    },
    {
      name: 'Oceanic, Atmospheric Forecasts',
      longProjectName: 'Project Metis: Seasonal Forecasts with Enhanced Ocean and Atmosphere Resolution',
      area: '',
      heroImage: require('@/assets/img/featured-projects/oceanic-forecasts.jpg'),
      projectLead: {
        name: 'Benjamin Cash',
        organizationName: 'George Mason University',
        twitter: null,
        thumbnail: require('@/assets/img/featured-projects/scientist-photos/benjamin-cash.jpg'),
        shortBio: `Benjamin Cash, Ph.D. is a research associate professor in the Center for Ocean-Land-Atmosphere Studies (COLA). His research focuses on the prediction and predictability of the physical climate system, with an emphasis on the influence of climate on human health.`
      },
      statData: [
        {
          statName: 'Core Hours',
          statNumber: 58000000,
          iconPath: require('@/assets/icon/core-hours-icon.svg')
        }
      ],
      mainContent: [
        {
          title: 'Sea, Land, and Air: How Earth’s Systems Interact',
          body: 'Project Metis—named after Metis, a mythological spirit of the sea and the goddess of wisdom, prudence, and deep thought—uses Cheyenne to simulate our atmosphere and oceans in finer detail than ever before. Modelers will better understand the combined impact of waves, sea-ice, and atmospheric changes to better predict seasonal climate, from daily to annual time scales. As a result, researchers can more accurately decide where to focus their efforts as they develop models in the near future. ',

          media: require('@/assets/video/featured-project-media/project-ocean-summ.mp4')
        },
        {
          title: 'Improving Climate Prediction Accuracy',
          body: `<p>We know climate events aren’t created in isolation. Droughts, for example, occur as a result of three main—and intricately connected—contributors: changes in land and sea surface temperatures, atmospheric circulation patterns, and soil moisture content.* We want to better understand the relationships between Earth’s systems like these, in the short and long term, to help us make better predictions.</p>

            <p><strong>How do you study that?</strong> We test very high-resolution model configurations with an ensemble framework that features a 9 km grid spacing in the atmosphere and 25 km in the ocean.</p>

            <p><strong>Ensemble framewhat?</strong> Instead of isolating the most likely weather condition, such as wind, we simulate a set — or ensemble — of forecasts. By simultaneously simulating waves, currents, sea-ice, land and the atmosphere, we can more accurately forecast a range of possible future climate states.</p>

            <p>Does all that data make forecasting more confusing? Quite the opposite! Ensemble forecasting data doesn’t just improve near and long-term climate predictions, it informs specific regions we should use ensemble forecasting.</p>
            
           <p> We understand the small scale stuff
           <ul>
              <li> We’re studying how land, sea and space all interact together to predict Earth’s systems in the near and long term.</li>
              <li>coupled ocean (waves, currents and sea-ice), land, and atmosphere ensemble framework. We will test very high-resolution model configurations, with grid spacing up to 9 km in the atmosphere and 25 km in the ocean, which represents getting better seasonal forecasting from the high resolution model from how ocean, land and air interact together 
              </li>
            </ul>
          </p>`,

          media: require('@/assets/video/featured-project-media/project-ocean-soci.mp4')
        }
      ]
    },
    {
      name: 'Wind Turbine Performance',
      longProjectName: 'Computational Study of Wind Turbine Performance and Loading Response to Turbulent Atmospheric Inflow Conditions ',
      area: 'Fluid Dynamics and Turbulence',
      heroImage: require('@/assets/img/featured-projects/wind-turbine.jpg'),
      projectLead: {
        name: 'Dimitri Mavriplis',
        organizationName: 'University of Wyoming',
        twitter: null,
        thumbnail: require('@/assets/img/featured-projects/scientist-photos/dmitri-mavriplis.jpg'),
        shortBio: `Dimitri Mavriplis, Ph.D. is the Max Castagne professor of Mechanical Engineering at the University of Wyoming. His research focuses on high performance computing for computational fluid dynamics problems with applications in aerospace engineering and wind energy. Mavriplis is a computational scientist working at the interface of computer science, applied mathematics and fluid dynamics.`
      },
      statData: [
        {
          statName: 'Core Hours',
          statNumber: 15000000,
          iconPath: require('@/assets/icon/core-hours-icon.svg')
        }
      ],
      mainContent: [
        {
          title: 'Summary',
          body: 'Predicting wind farm performance is a complex, but important challenge. To improve predictions, we need better flow structure resolution and reliable modeling of turbulent eddies in the entire length-scale range. This project uses a multi-scale modeling methodology that models the entire range of spatial and temporal scales to more accurately predict wind turbine performance. Additionally, this project uses software framework with the large-eddy simulation approach to predict turbulent flow fields. Planners can use this data to better indicate the most efficient locations for electricity-generating wind farms.',
          media: require('@/assets/video/featured-project-media/project-turbine-summ.mp4')
        },
        {
          title: 'Benefit to Humans',
          body: `
            <p>We’ve come a long way since the invention of the first electricity-generating wind turbine in 1888.* Today, an average of 25 million American homes are powered by wind energy.**</p>

            <p><strong>What’s so great about wind turbines?</strong> They’re a clean and renewable energy source. Turbines generate power and electricity without creating pollution.</p>

            <p><strong>Do we need more wind turbines?</strong> Around 52,000 wind turbines exist in America to date. But through our research, we can discover what areas will yield the most consistent and efficient wind energy production. </p>

           <p><strong>Should I use wind power?</strong> Whether you own a business or a home, wind power is accessible and affordable. </p>

           <p><strong> Sources: </strong><br>
            *(n.d.). Retrieved November 28, 2017, from http://www.thirdplanetwind.com/energy/history.aspx<br>
            **Wind Energy Facts at a Glance. Retrieved from https://www.awea.org/wind-energy-facts-at-a-glance</p>
          `,
          media: require('@/assets/video/featured-project-media/project-turbine-soci.mp4')
        }
      ]
    },
    {
      name: 'Understanding heliospheric Weather',
      longProjectName: 'Turbulence and Magnetic Reconnection in the Heliosphere',
      area: '',
      heroImage: require('@/assets/img/featured-projects/heliosphere.jpg'),
      projectLead: {
        name: 'Michael Shay',
        organizationName: 'University of Delaware',
        twitter: null,
        thumbnail: require('@/assets/img/featured-projects/scientist-photos/michael-shay.jpg'),
        shortBio: `Michael Shay is a professor in the Department of Physics and Astronomy at the University of Delaware. His research interests focus on the plasma physics of space weather. More specifically, he studies how the interaction of the sun and the Earth’s magnetic field create radiation in space that can impact technology.`
      },
      statData: [
        {
          statName: 'Core Hours',
          statNumber: 18300000,
          iconPath: require('@/assets/icon/core-hours-icon.svg')
        }
      ],
      mainContent: [
        {
          title: 'Summary',
          body: `<p>Plasma turbulence and magnetic reconnection play a fundamental role in space weather. Magnetic reconnection — an explosive release of magnetic energy — couples with solar wind in the Earth's magnetosphere to create weather in near-Earth space. Plasma turbulence, on the other hand, plays an important role in heating the solar corona and the solar wind, the drivers of space weather.</p>

           <p> Both are critical: they convert flow and magnetic field energy into plasma heating and energetic particles, which cause space weather that could affect earth. However, the Sun-Earth system is not in thermodynamic equilibrium, so simple fluid closure models are inadequate; a fully kinetic treatment is required.</p>

            <p>This study uses a new model to examine both aspects of the violent physical processes near the surface of the sun. This work will advance our understanding of solar physics and the processes that drive space weather in the earth’s magnetic field and outer edges of our atmosphere.
          </p>`,
          media: require('@/assets/video/featured-project-media/project-helio-summ.mp4')
        },
        {
          title: 'Benefit to Humans',
          body: `
              <p>You won’t see space weather forecasts on the nightly news, but while earth’s magnetosphere keeps space weather out, it can still impact our lives. By understanding more details of the sun’s magnetic field, we will better forecast space weathers impact on earth.</p>

              <p><strong>How does space weather impact Earth?</strong> Intense solar storms cause solar eruptions that, if large enough, could disrupt some of our most complex technologies, like radio signals and GPS’.* </p>

              <p><strong>What can the sun tell us?</strong> By studying the surface on the Sun and solar wind, we can better understand how space weather is created (and when and how it might affect Earth).</p>

              <p><strong>Can we prevent space weather from disturbing earth?</strong> No. But by better predicting solar weather, we can better prepare for it.  </p>

              <p>Source: <br>
              *How does Space Weather affect Earth and Human Society? (n.d.). Retrieved November 28, 2017, from https://www.windows2universe.org/space_weather/sw_intro/sw_affect_us.html
              </p>

            `,
          media: require('@/assets/video/featured-project-media/project-helio-soci.mp4')
        }
      ]
    },
    {
      name: 'Predicting Climate Extremes',
      longProjectName: 'Predicting Near-Term Changes in the Likelihood of Climate Extremes: Initialized Decadal Climate Prediction Using Large Ensembles',
      area: '',
      heroImage: require('@/assets/img/featured-projects/climate-extremes.jpg'),
      projectLead: {
        name: 'Stephen Yeager',
        organizationName: 'Climate & Global Dynamics',
        twitter: null,
        thumbnail: require('@/assets/img/featured-projects/scientist-photos/stephen-yeager.jpg'),
        shortBio: `Stephen Yeager, Ph.D. is in the Oceanography section of the Climate and Global Dynamics Laboratory at NCAR. His research focuses on advancing our understanding of the mechanisms, climate impacts, and predictability associated with large-scale changes in the ocean.`
      },
      statData: [
        {
          statName: 'Core Hours',
          statNumber: 35400000,
          iconPath: require('@/assets/icon/core-hours-icon.svg')
        }
      ],
      mainContent: [
        {
          title: 'Summary',
          body: 'This research will improve our ability to predict extreme events, such as floods and droughts, in specific regions on Earth, like the Rocky Mountains. While difficult to achieve, it will support the development of NCAR’s best climate model, make stronger links between ocean temperatures and severe weather, and improve the statistics researchers use to predict extreme events.',
          media: require('@/assets/video/featured-project-media/project-climate-summ.mp4')
        },
        {
          title: 'Benefit to Humans',
          body: `
              <p>Most weather apps can forecast weather up to 10 days away. This project; however, aims to predict climate years and decades from now. Decadal climate prediction isn’t new, but through ensemble forecasting, researchers aim to improve the accuracy in which they can predict decadal climate. </p>

              <p><strong>What’s ensemble forecasting?</strong> Instead of forecasting the single most likely weather condition, we simulate a set — or ensemble — of forecasts. This set, which utilizes current and historical data, indicates the range of possible future atmospheric states.</p>

              <p><strong>Like natural disasters?</strong> Yes. But in addition to predicting extreme events in specific regions — like heat waves, cold spells and floods — we’re looking for predictable shifts of these events and their relation to sea surface temperature and sea ice variations. </p>

              <p><strong>Sea temperature impacts weather?</strong> Sure does. And vice versa. Sea ice reflects the Sun’s heat and cools the Earth. But rising temperatures causes sea ice to melt and sea levels to rise. Less ice means less solar reflection, causing warmer air and sea temperatures. Warmer sea surface temperatures induces extreme events like hurricanes.*</p>


             <p> <strong>Source: </strong><br>
              *N. (2012, October 09). Supercomputer! NCAR-Wyoming Supercomputing Center. Retrieved November 28, 2017, from https://www.youtube.com/watch?v=NVogS2T-Wi8
             </p>
            `,
          media: require('@/assets/video/featured-project-media/project-climate-soci.mp4')
        }
      ]
    }
  ]
};

export default {
  state
};
