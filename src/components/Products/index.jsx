/* eslint-disable react/no-unescaped-entities */
export const Measurement = [
    {
        img:"images/Product/Measurement/SinglePhase.svg",
        head:"Single Phase",
        route:'Measurement-Device/Single-phase',
        hover:"images/Product/Measurement/Single_fff.svg",
        
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"
    },
    {
        img:"images/Product/Measurement/SinglePhase.svg",
        head:"Three Phase",
        route:'Measurement-Device/Three-Phase',
        hover:"images/Product/Measurement/Single_fff.svg",
        
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"
    },
    {
        img:"images/Product/Measurement/transformer.svg",
        head:"Transformer Meters",
        route:'Measurement-Device/Transformer-Meters',
        hover:"images/Product/Measurement/trans_ff.svg",
        
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"
    },

]

export const prepayMeter = [
    {
        img:"images/Product/Measurement/SinglePhase.svg",
        head:"Single Phase",
        route:'Measurement-Device/Prepayment-Single-phase',
        hover:"images/Product/Measurement/Single_fff.svg",
        
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"
    },
    {
        img:"images/Product/Measurement/SinglePhase.svg",
        head:"Three Phase",
        route:'Measurement-Device/Prepayment-Three-phase',
        hover:"images/Product/Measurement/Single_fff.svg",
        
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"
    },
]

export const D2S = [
    {
        img:"images/Product/Measurement/transformer.svg",
        head:"RM+",
        route:'Measurement-Device/D2S-RM+',
        hover:"images/Product/Measurement/trans_ff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore" 
    }
]


export const Software = [
    {
        img:"images/Product/Softwares/MDAS.svg",
        head:"MDAS",
        route:'Softwares/MDAS',
        hover:"images/Product/Softwares/MDAS_fff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"  
    },
    {
        img:"images/Product/Softwares/MDM.svg",
        head:"MDM",
        route:'Softwares/MDM',
        hover:"images/Product/Softwares/MDM_fff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"  
    },
    {
        img:"images/Product/Softwares/Group.svg",
        head:"Mobile Applications",
        route:'Softwares/Mobile-Applications',
        hover:"images/Product/Softwares/Group_fff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"  
    },
]

export const Communicate = [
    {
        img:"images/Product/Commune/NIC.svg",
        head:"NIC",
        route:'Communication-Module/NIC',
        hover:"images/Product/Commune/NIC_fff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"  
    },
    {
        img:"images/Product/Commune/Gateway.svg",
        head:"Gateways",
        route:'Communication-Module/Gateways',
        hover:"images/Product/Commune/Gateway_fff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"  
    },
    {
        img:"images/Product/Commune/Coord.svg",
        head:"Coordinators",
        route:'Communication-Module/Coordinators',
        hover:"images/Product/Commune/Coord_fff.svg",
        desc:"Adya has developed products and solutions that are “ORIGINAL” which support the entire smart grid chain.",
        explore:"explore"  
    },
]
export const singleProdInfo = [
    {   single:'Single-phase',
        head:'Single Phase',
        sol_banner:'',
        overview:(<>
        Adya's <strong> ASM 200</strong> series of Smart Energy Meters is crafted to cater to global utility needs, aligning with the increasing demands of both the utility sector and consumers. This product range is versatile, designed to suit various market needs while focusing on quality to meet current and future industry requirements. These intelligent meters are equipped with capabilities for electric metering information, storage, and real-time monitoring. <br /> <br />
        They also feature automatic control and remote integration, enhancing productivity and efficiency while reducing energy costs. This aligns with contemporary scientific energy management practices. Additionally, these meters are known for their reliability and ease of installation and configuration.
        </>),
        standard:{
            IEC:'IEC : 62056 -21,  42, 46, 47;  62052-11,21, 62051-1; 62053-21, 62055-31',
            IS:'IS 16444 (IS 13779, IS5959 Part-2, IS 15884)'
        },
        variant:{
            var1:'ASM21',
            var2:'ASM21N'
        },
        communicationSupported:[
            '2G/4G',
            'RF Mesh',
            'NBIoT',
            'Wi-Fi Mesh',
            'LoRa',
            
        ],
        applications: [
            "Utilities",
            "Commercial ",
            "Residential",
            
            "Net Metering ",
            "Energy retailers",
            "Industries",
            "EV Charging ",
            "Communication Supported",
        ],
        keyFeatures: {
            accuracy: "Class 1.0",
            frequencyRange: "45 to 65 Hz",
            operatingTemp: "5*C to + 60*C",
            basicCurrentMax: "5/30, 10/60 Amps",
            startingCurrent : "0.2% LB",
            voltageRange : '140v to 288v',
            securityReliability : 'Tamper Detection & Data encryption'
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Three-Phase',
        sol_banner:'',
        head:'Three Phase',
        overview:(<>
       Adya introduces <strong>ASM 200</strong> series product line of Smart Energy Meters to meet the global Utility needs. In tune with the growing demand of the utilities and especially  commercial and Industrial consumers  this 3 Phase Smart Meter is designed to meet various customer requirements for the growing market. The emphasis has been on the quality and also to meet the current and future planning of the Metering industry. 

        </>),
        standard:{
            IS:'IS 16444 (Part-1), IS 15884:2010 & IS 15959 Part 1 & 2',
            IEC:'IEC : 62056 – 21,42,46,47, IEC:62052 – 21'
        },
        variant:{
            var1:'ASM 231',
            var2:'ASM231P'
        },
        communicationSupported:[
            '2G/3G/4G',
            'NBIoT',
            'RF Mesh',
            'Wi-Fi Mesh',
            
            
        ],
        applications: [
            "Utilities",
            "Commercial ",
            "Residential",
            
            "Micro Generation /Net Metering",
            "Energy retailers",
            "Industries",
            "EV Charging ",
            
        ],
        keyFeatures: {
            accuracy: "Class 1.0 & Class 2.0 ( Reactive)",
            frequencyRange: "50Hz",
            operatingTemp: "25° C to +60°C",
            basicCurrentMax: "10/60, 20/100Amps",
            startingCurrent : " 0.2% lb",
            voltageRange : '3 x 240/415V',
            securityReliability : 'TAES GCM 128 bit encryption, DLMS Security Suite ‘0’'
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Transformer-Meters',
        sol_banner:'',
        head:'Transformer Meters',
        overview:(<>
       Adya introduces <strong> ASM 231 CT </strong> series product line of Smart Energy Meters to meet the global Utility needs. The 3 Phase CT Operated Meter is designed for metering of LT consumers, Distribution Transformers and feeders on LT Side. The meter has advanced features in capturing Real Time Data and tamper recording and helps discom to do Energy Audit in Real Time.
 

        </>),
        standard:{
            IS:'IS 16444 (Part-2),IS14697,  IS 15959 Part 3',
            IEC:'IEC 62052-11 IEC 62053 – 22 and CBIP325 '
        },
        variant:{
            var1:'ASM 231CT',
           
        },
        communicationSupported:[
            '2G/3G/4G',
            'NBIoT',
            'RF Mesh',
            'Wi-Fi Mesh',
            
            
        ],
        applications: [
            "Utilities (Distribution Transformer)",
            "Commercial ",
          
            "Energy retailers",
            "Industries",
            
        ],
        keyFeatures: {
            accuracy: "Class 0.5",
            frequencyRange: "+/-5%",
            operatingTemp: "-25° C to +60°C",
            basicCurrentMax: "5mA to 10 A",
            startingCurrent : "0.1% of Ib",
            voltageRange : '-40% to +20%',
            securityReliability : ' AES GCM 128 bit encryption, DLMS Security Suite ‘0’'
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Prepayment-Single-phase',
        head:'Single Phase',
        sol_banner:'',
        overview:(<>
        Adya designed <strong> ASM 200</strong> Series smart prepaid energy meter. This system has  advance technology designed to prevent electricity theft and promote efficient energy usage. This system involves the installation of prepaid meters at consumers' premises, which can be remotely monitored and controlled by the utility company. The smart prepaid energy metering system uses a secure communication protocol to transmit data between the meters and the utility company's central server. This enables the utility company to track the energy usage and billing of each consumer in real-time.
        <br /> <br />
        The smart prepaid energy metering system has several advantages over traditional postpaid meters. It eliminates the need for manual meter readings and reduces the billing cycle time, making it more convenient for consumers. It also encourages consumers to use energy more efficiently since they can monitor their consumption and adjust their usage accordingly. Moreover, the system reduces the possibility of  electricity theft, which is a significant problem in many countries.

        </>),
        standard:{
            // IEC:'IEC : 62056 -21,  42, 46, 47;  62052-11,21, 62051-1; 62053-21, 62055-31',
            IS:'IS 13779, IS 15884:2010'
        },
        variant:{
            var1:'ASM211P',
            // var2:'ASM21N'
        },
        communicationSupported:[
            '2G/4G',
            'RF Mesh',
            'NBIoT',
            'Wi-Fi Mesh',
            
            
        ],
        applications: [
            "Utilities",
            "Commercial ",
            "Residential",
            
           
            "Energy retailers",
            "Industries",
            "EV Charging ",
           
        ],
        keyFeatures: {
            accuracy: "Class 1.0  (Active)",
            frequencyRange: " 50Hz, +/-5%",
            operatingTemp: "-25° C to +60°C",
            basicCurrentMax: "5/30A, 10/60Amps",
            startingCurrent : " 0.2% lb",
            voltageRange : ' 1 x 240V',
            securityReliability : 'AES GCM 128 bit encryption, DLMS Security Suite ‘0’'
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Prepayment-Three-phase',
        head:'Three Phase',
        sol_banner:'',
        overview:(<>
        Adya's <strong> ASM 200</strong> series of Smart Energy Meters is crafted to cater to global utility needs, aligning with the increasing demands of both the utility sector and consumers. This product range is versatile, designed to suit various market needs while focusing on quality to meet current and future industry requirements. These intelligent meters are equipped with capabilities for electric metering information, storage, and real-time monitoring. <br /> <br />
        They also feature automatic control and remote integration, enhancing productivity and efficiency while reducing energy costs. This aligns with contemporary scientific energy management practices. Additionally, these meters are known for their reliability and ease of installation and configuration.
        </>),
        standard:{
            IEC:'IEC : 62056 -21,  42, 46, 47;  62052-11,21, 62051-1; 62053-21, 62055-31',
            IS:'IS 16444 (IS 13779, IS5959 Part-2, IS 15884)'
        },
        variant:{
            var1:'ASM21',
            var2:'ASM21N'
        },
        communicationSupported:[
            '2G/4G',
            'RF Mesh',
            'NBIoT',
            'Wi-Fi Mesh',
            'LoRa',
            
        ],
        applications: [
            "Utilities",
            "Commercial ",
            "Residential",
            
            "Net Metering ",
            "Energy retailers",
            "Industries",
            "EV Charging ",
            "Communication Supported",
        ],
        keyFeatures: {
            accuracy: "Class 1.0",
            frequencyRange: "45 to 65 Hz",
            operatingTemp: "5*C to + 60*C",
            basicCurrentMax: "5/30, 10/60 Amps",
            startingCurrent : "0.2% LB",
            voltageRange : '140v to 288v',
            securityReliability : 'Tamper Detection & Data encryption'
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'D2S-RM+',
        head:'Three Phase',
        sol_banner:'',
        overview:(<>
       The RM+ is a compact, rugged unit, Simple Plug and play device mainly designed to read data from remote end devices. RM+ is an intelligent IoT device that can be integrated with any Non-Smart end device /digital meter (Energy, Water and Gas) which converts to Smart Device. Key role of RM+ is to establish the communication link in between the Meters & DCU / uPOS and it also performs necessary business logic such as protocol conversions (Proprietary to DLMS), storage etc., 

        </>),
        standard:{
            // IEC:'IEC : 62056 -21,  42, 46, 47;  62052-11,21, 62051-1; 62053-21, 62055-31',
            IS:'It complies with IS 16444 standards'
        },
        variant:{
            var1:'RM+, RM+ Advance	',
            var2:'RM + Premium'
        },
        communicationSupported:[
            ' GSM/GPRS (IPV4/IPV6)',
            'RF Mesh',
            'Wi-Fi'
            
        ],
        applications: [
            "Utilities",
            "Commercial ",
            "Residential",
            
            "Micro Generation/Net Metering",
            "Energy retailers",
            "Industries",
            "EV Charging ",
            
        ],
        keyFeatures: {
            accuracy: "Class 1.0",
            frequencyRange: "RF -  2.4 GHz, 865-868 MHz, Wi-Fi, Cellular – 900/1800MHz",
            operatingTemp: "-25° C to +60°C",
            basicCurrentMax: "170mA",
            startingCurrent : "0.2% LB",
            voltageRange : '5V',
            securityReliability : 'AES GCM 128 Bit, AES 256 Encryption'
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'MDAS',
        head:'MDAS',
        sol_banner:'',
        overview:(<>
       MDAS (Meter Data Acquisition System) provides seamless data collection from smart meters, ensuring accurate and timely data for utility operations. 

        </>),
        standard:{
             IEC:'Complies with global standards like DLMS/COSEM and IEC 62056.',
             IS:'Ensuring compatibility and interoperability across diverse systems.'
        },
        variant:{
            var1:'Residential, Commercial	',
            var2:'Industrial applications'
        },
        communicationSupported:[
            ' GPRS',
            'RF Mesh',
            'NB-IoT'
            
        ],
        applications: [
            
            "Data analytics",
            "billing",
            "energy management ",
            
        ],
        keyFeatures: {
            "Range": "upto 500,000 meters",
           "Data Integrity":"Supported",
           "Interval Data ":"Supported upto 5 minutes",
           "Advanced Validation":"Supported"

        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'MDM',
        head:'MDM',
        sol_banner:'',
        overview:(<>
       MDM provides centralized data management and storage for meter data, ensuring accurate and reliable data for billing, analytics, and operational decision-making. 

        </>),
        standard:{
             IEC:'Adheres to international standards like CIM and IEC 61968.',
             IS:'Ensuring seamless integration and compliance across various utility systems.'
        },
        variant:{
            var1:'Residential, Commercial	',
            var2:'Industrial applications'
        },
        communicationSupported:[
            ' GPRS',
            'RF Mesh',
            'NB-IoT'
            
        ],
        applications: [
            
            "Load forecasting",
            "Billing",
            "Energy auditing ",
            "Enhancing utility efficiency"," Customer engagement"
        ],
        keyFeatures: {
            "Range": "more than 500,000+ meters",
           "Realtime data processing":"Supported",
         
           "Comprehensive analytics ":"Supported"

        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'NIC',
        head:'NIC',
        sol_banner:'',
        overview:(<>
      The NIC (Network Interface Card) enables seamless communication between smart meters and utility systems, facilitating data exchange and remote management.

        </>),
        standard:{
             IEC:'IEEE 802.15.4 and DLMS/COSEM.',
             IS:'Ensuring interoperability and secure data transmission.'
        },
        variant:{
            var1:'RF Mesh, GPRS',
            var2:'PLC'
        },
        communicationSupported:[
            'RF Mesh',
            'GPRS',
            'PLC',
            "NB-IoT"
            
        ],
        applications: [
            
            "smart metering",
            "demand response",
            "remote monitoring applications",
            "enhancing connectivity",
            "Data Accuracy"
        ],
        keyFeatures: {
           "Data encryption": "Supported",
           "Low power consumption":"Supported",
           "Reliable performance":"Supported",
           "Continuous communication":"Supported",
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Gateways',
        head:'Gateways',
        sol_banner:'',
        overview:(<>
       Gateways act as central hubs for aggregating data from multiple smart meters, facilitating communication between field devices and utility systems.

        </>),
        standard:{
             IEC:'IEC 61850 and IEEE 802.3',
             IS:'Ensuring reliable data transmission and integration with existing infrastructure.'
        },
        variant:{
            var1:'Available in various configurations to support different scales of deployment',
           
        },
        communicationSupported:[
            'RF Mesh',
            'Wi-Fi',
            'Ethernet',
            'Cellular networks'
            
            
        ],
        applications: [
            
            "Data aggregation",
            "Remote Monitoring",
            "Smart grid",
            "Smart metering systems"
            
        ],
        keyFeatures: {
            "high data throughput": "Supported",
           "secure encryption ":"Supported",
           "rugged design ":"Supported",
           
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Coordinators',
        head:'Coordinators',
        sol_banner:'',
        overview:(<>
      Coordinators manage and synchronize communication between smart meters and the utility's network, ensuring efficient data routing and collection.

        </>),
        standard:{
             IEC:'Compliant with international standards such as IEEE 802.15.4 and DLMS/COSEM.',
             IS:'Providing reliable interoperability and data security.'
        },
        variant:{
            var1:'iOS, Android',
            var2:'user-friendly interface'
        },
        communicationSupported:[
            ' Zigbee',
            'RF Mesh',
            'NB-IoT'
            
        ],
        applications: [
            
            "Bill payments",
            "Real-time usage monitoring",
            "Outage notifications",
            "Customer service interactions"
            
        ],
        keyFeatures: {
            "Features intuitive dashboards": "upto 500,000 meters",
           "Customizable alerts":"Supported",
           "Multi-language ":"Supported upto 5 minutes",
           "Enhanced user experience":"Supported",
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
    {   single:'Mobile-Applications',
        head:'Mobile-Applications',
        sol_banner:'',
        overview:(<>
       Mobile applications provide users with real-time access to their energy consumption data, billing information, and personalized energy-saving tips.

        </>),
        standard:{
             IEC:'Compliant with industry standards for data security and privacy.',
             IS:'ensuring safe and secure access to personal energy data.'
        },
        variant:{
            var1:'iOS, Android',
            var2:'user-friendly interface'
        },
        communicationSupported:[
            ' Wi-fi',
            'cellular networks',
            'API integrations'
            
        ],
        applications: [
            
            "Bill payments",
            "Real-time usage monitoring",
            "Outage notifications",
            "Customer service interactions"
            
        ],
        keyFeatures: {
            "Features intuitive dashboards": "upto 500,000 meters",
           "Customizable alerts":"Supported",
           "Multi-language ":"Supported upto 5 minutes",
           "Enhanced user experience":"Supported",
        },
        additionalFeatures: 'Load survey parameters, programmable parameters, self-diagnostic features, & a provision for real-time clock.',
        physicalCharacteristics: ' IP51 protection against dust and moisture, LCD display with guaranteed life of 10 years.',
        images: [
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg",
            "/images/Product/Measurement/SinglePhase.svg"
        ]
    },
]

export const list_measurement = [
    {
        img:"/images/sectors/energy.svg",
        head:"Smart Meters",
        route:'Smart-Meters',
        hover:"/images/sectors/energy_fff.svg",
        followUp:"( Advance Metering Infrastructure )",
        desc:"Curtail your revenue leakages by upgrading your legacy prepayment system with Smart prepayment.",
        explore:"explore"
    },
    {
        img:"/images/sectors/energy.svg",
        head:"Prepayment Meters",
        route:'Prepayment Meters',
        hover:"/images/sectors/energy_fff.svg",
        followUp:"( Advance Metering Infrastructure )",
        desc:"Curtail your revenue leakages by upgrading your legacy prepayment system with Smart prepayment.",
        explore:"explore"
    },
    {
        img:"/images/sectors/energy.svg",
        head:"Digi2smart",
        route:'Digi2smart',
        hover:"/images/sectors/energy_fff.svg",
        followUp:"( Advance Metering Infrastructure )",
        desc:"Curtail your revenue leakages by upgrading your legacy prepayment system with Smart prepayment.",
        explore:"explore"
    }
]