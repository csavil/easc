const { Client, RichEmbed } = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Client();

client.once('ready', () => {
    console.log('The bot is ready!')
})

client.on('message', message => {
    //console.log(message.content);

    console.log(message.content);
    if(message.content.startsWith(`${prefix}annaou`)) {
        message.channel.send("And I oop-! " + ":flushed: ")
    } if(message.content.startsWith(`${prefix}csavil`)) {
        message.channel.send("The best owner! owo")
    } if(message.content.startsWith(`${prefix}bye`)) {
        message.channel.send("Bye! :relieved:\nhttps://gph.is/g/aKnGK99")
    } 
})

client.on('message', message => {
    // Receiving the message
    console.log(message.content);
    if(message.content === 'ping') {
        message.reply('pong!');
    }if(message.content === "?odds") {
        

    }if (message.content === '?view') {
        const embed = new RichEmbed()
            .setTitle('• Your 5th Eurovision Americas Song Contest Ranking')
            .setColor('DARK_NAVY')
            .addField('1-14', 'País')
            .addField('15-28', 'País')
            .addField('29-40', 'País');
        message.channel.send(embed);

    } if (message.content === '?entry ca 1') {
        const embed = new RichEmbed()
            .setTitle('• Grimes - We Appreciate Power (Canada)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a8/Heart_Canada.png/revision/latest?cb=20190428232337")
            .addField('• Grand Final', '- Place: **1st** out of 13\n- Score: 98\n- Draw: 12th')
        message.channel.send(embed);    
    } if (message.content === '?entry cr 1') {
        const embed = new RichEmbed()
            .setTitle('• Debi Nova - No Nos Sobran los Domingos (Costa Rica)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/4a/HCR.png/revision/latest?cb=20190623032009")
            .addField('• Grand Final', '- Place: **3rd** out of 13\n- Score: 78\n- Draw: 3rd')
        message.channel.send(embed);
    } if (message.content === '?entry mx 1') {
        const embed = new RichEmbed()
            .setTitle('• Ángela Aguilar - La Llorona (Mexico)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/0/0b/HMX.png/revision/latest?cb=20190623011321")
            .addField('• Grand Final', '- Place: **5th** out of 13\n- Score: 74\n- Draw: 13th')
        message.channel.send(embed);
    } if (message.content === '?entry bm 1') {
        const embed = new RichEmbed()
            .setTitle('• Mishka - Never Give Up (Bermuda)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/10/HBM.png/revision/latest?cb=20190623011122")
            .addField('• Grand Final', '- Place: **11th** out of 13\n- Score: 41\n- Draw: 5th')
        message.channel.send(embed);
    } if (message.content === '?entry pe 1') {
        const embed = new RichEmbed()
            .setTitle('• Leo Rojas - El Cóndor Pasa (Peru)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a0/HPE.png/revision/latest?cb=20190626050345")
            .addField('• Grand Final', '- Place: **9th** out of 13\n- Score: 46\n- Draw: 9th')
        message.channel.send(embed);
    } if (message.content === '?entry us 1') {
        const embed = new RichEmbed()
            .setTitle('• Lizzo - Juice (United States)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/53/HUS.png/revision/latest?cb=20190623024908")
            .addField('• Grand Final', '- Place: **2nd** out of 13\n- Score: 85\n- Draw: 7th')
        message.channel.send(embed);
    } if (message.content === '?entry ar 1') {
        const embed = new RichEmbed()
            .setTitle('• PEMA - El Pueblo se Rebela (Argentina)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/fb/HAR.png/revision/latest?cb=20190626043318")
            .addField('• Grand Final', '- Place: **13th** out of 13\n- Score: 30\n- Draw: 11th')
        message.channel.send(embed);
    } if (message.content === '?entry uy 1') {
        const embed = new RichEmbed()
            .setTitle('• León Gieco - Uruguay, Uruguay (Uruguay)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d3/HUR.png/revision/latest?cb=20190626051455")
            .addField('• Grand Final', '- Place: **12th** out of 13\n- Score: 40\n- Draw: 6th')
        message.channel.send(embed);
    } if (message.content === '?entry vi 1') {
        const embed = new RichEmbed()
            .setTitle('• Pia Toscano - This Time (U.S. Virgin Islands)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/80/HVI.png/revision/latest?cb=20190624024205")
            .addField('• Grand Final', '- Place: **4th** out of 13\n- Score: 75\n- Draw: 2nd')
        message.channel.send(embed);
    } if (message.content === '?entry hn 1') {
        const embed = new RichEmbed()
            .setTitle('• Manu Martínez - Wéndeti Nagaira (Honduras)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/b/ba/HHO.png/revision/latest?cb=20190623051454")
            .addField('• Grand Final', '- Place: **8th** out of 13\n- Score: 57\n- Draw: 4th')
        message.channel.send(embed);
    } if (message.content === '?entry ky 1') {
        const embed = new RichEmbed()
            .setTitle('• Natasha Kozaily - Shooting Stars (Cayman Islands)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d1/HCY-0.png/revision/latest?cb=20190623054124")
            .addField('• Grand Final', '- Place: **6th** out of 13\n- Score: 71\n- Draw: 8th')
        message.channel.send(embed);
    } if (message.content === '?entry cw 1') {
        const embed = new RichEmbed()
            .setTitle('• Kris Berry - Ninja (Curazao)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/c/cc/HCU.png/revision/latest?cb=20190623060118")
            .addField('• Grand Final', '- Place: **7th** out of 13\n- Score: 66\n- Draw: 10th')
        message.channel.send(embed);
    } if (message.content === '?entry gq 1') {
        const embed = new RichEmbed()
            .setTitle('• Paloma del Sol - Atrévete a Ser Felíz (Equatorial Guinea)')
            .setDescription('- 1st Eurovision Americas')
            .setColor('GREEN')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/7/73/HGE.png/revision/latest?cb=20190720043727")
            .addField('• Grand Final', '- Place: **9th** out of 13\n- Score: 53\n- Draw: 1st')
        message.channel.send(embed);



    } if (message.content === '?entry cr 2') {
        const embed = new RichEmbed()
            .setTitle('• Fátima Pinto - Feel Something (Costa Rica)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/4a/HCR.png/revision/latest?cb=20190623032009")
            .addField('• Grand Final', '- Place: **7th** out of 20\n- Score: 128\n- Draw: 4th')
        message.channel.send(embed);
    } if (message.content === '?entry ca 2') {
        const embed = new RichEmbed()
            .setTitle('• Charlotte Cardin - Double Shifts (Canada)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a8/Heart_Canada.png/revision/latest?cb=20190428232337")
            .addField('• Grand Final', '- Place: **2nd** out of 20\n- Score: 209\n- Draw: 10th')
        message.channel.send(embed);
    } if (message.content === '?entry mx 2') {
        const embed = new RichEmbed()
            .setTitle('• Luis Miguel - La Fiesta del Mariachi (Mexico)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/0/0b/HMX.png/revision/latest?cb=20190623011321")
            .addField('• Grand Final', '- Place: **16th** out of 20\n- Score: 82\n- Draw: 7th')
        message.channel.send(embed);
    } if (message.content === '?entry bm 2') {
        const embed = new RichEmbed()
            .setTitle('• Years & Years - If You´re Over Me (Bermuda)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/10/HBM.png/revision/latest?cb=20190623011122")
            .addField('• Grand Final', '- Place: **3rd** out of 20\n- Score: 208\n- Draw: 17th')
        message.channel.send(embed);
    } if (message.content === '?entry bz 2') {
        const embed = new RichEmbed()
            .setTitle('• AZ - Chatty Chatty (Belize)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/fb/HBE.png/revision/latest?cb=20190623030011")
            .addField('• Grand Final', '- Place: **20th** out of 20\n- Score: 7\n- Draw: 1st')
        message.channel.send(embed);
    } if (message.content === '?entry pe 2') {
        const embed = new RichEmbed()
            .setTitle('• Alborada - Diáspora (Peru)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a0/HPE.png/revision/latest?cb=20190626050345")
            .addField('• Grand Final', '- Place: **18th** out of 20\n- Score: 43\n- Draw: 8th')
        message.channel.send(embed);
    } if (message.content === '?entry us 2') {
        const embed = new RichEmbed()
            .setTitle('• Plastique Tiara - Irresistible (United States)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/53/HUS.png/revision/latest?cb=20190623024908")
            .addField('• Grand Final', '- Place: **9th** out of 20\n- Score: 107\n- Draw: 18th')
        message.channel.send(embed);
    } if (message.content === '?entry gf 2') {
        const embed = new RichEmbed()
            .setTitle('• Jahyanaï ft. Bamby - Who Mad Again (French Guiana)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/18/HFG.png/revision/latest?cb=20190623061536")
            .addField('• Grand Final', '- Place: **12th** out of 20\n- Score: 94\n- Draw: 20th')
        message.channel.send(embed);
    } if (message.content === '?entry br 2') {
        const embed = new RichEmbed()
            .setTitle('• Ludmilla - Solta a Batida (Brazil)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/f9/HBR.png/revision/latest?cb=20190626044257")
            .addField('• Grand Final', '- Place: *8th** out of 20\n- Score: 120\n- Draw: 8th')
        message.channel.send(embed);
    } if (message.content === '?entry cl 2') {
        const embed = new RichEmbed()
            .setTitle('• Los Búnkers - Llueve Sobre la Ciudad (Chile)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/9/94/HCH.png/revision/latest?cb=20190626044807")
            .addField('• Grand Final', '- Place: *13th** out of 20\n- Score: 92\n- Draw: 14th')
        message.channel.send(embed);
    } if (message.content === '?entry ar 2') {
        const embed = new RichEmbed()
            .setTitle('• Coscu - Vuelve (Argentina)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/fb/HAR.png/revision/latest?cb=20190626043318")
            .addField('• Grand Final', '- Place: **5th** out of 20\n- Score: 164\n- Draw: 6th')
        message.channel.send(embed);
    } if (message.content === '?entry uy 2') {
        const embed = new RichEmbed()
            .setTitle('• Gaucho Power - El Cuarteto de Nos (Uruguay)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d3/HUR.png/revision/latest?cb=20190626051455")
            .addField('• Grand Final', '- Place: **11th** out of 20\n- Score: 99\n- Draw: 11th')
        message.channel.send(embed);
    } if (message.content === '?entry fk 2') {
        const embed = new RichEmbed()
            .setTitle('• Frank Turner - Be More Kind (Falkland Islands)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d0/HMA.png/revision/latest?cb=20190626045415")
            .addField('• Grand Final', '- Place: **15th** out of 20\n- Score: 83\n- Draw: 3rd')
        message.channel.send(embed);
    } if (message.content === '?entry vi 2') {
        const embed = new RichEmbed()
            .setTitle('• Lauren Daigle - You Say (U.S. Virgin Islands)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/80/HVI.png/revision/latest?cb=20190624024205")
            .addField('• Grand Final', '- Place: **1st** out of 20\n- Score: 276\n- Draw: 12th')
        message.channel.send(embed);
    } if (message.content === '?entry vg 2') {
        const embed = new RichEmbed()
            .setTitle('• Iyaz - One Million (British Virgin Islands)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/3/38/HBI.png/revision/latest?cb=20190623053720")
            .addField('• Grand Final', '- Place: **10th** out of 20\n- Score: 103\n- Draw: 19th')
        message.channel.send(embed);
    } if (message.content === '?entry ky 2') {
        const embed = new RichEmbed()
            .setTitle('• Maeve - Eden (Cayman Islands)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d1/HCY-0.png/revision/latest?cb=20190623054124")
            .addField('• Grand Final', '- Place: **4th** out of 20\n- Score: 167\n- Draw: 13th')
        message.channel.send(embed);
    } if (message.content === '?entry cw 2') {
        const embed = new RichEmbed()
            .setTitle('• Fresku & Izaline Calister - Cirkels (Curazao)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/c/cc/HCU.png/revision/latest?cb=20190623060118")
            .addField('• Grand Final', '- Place: **17th** out of 20\n- Score: 64\n- Draw: 2nd')
        message.channel.send(embed);
    } if (message.content === '?entry gq 2') {
        const embed = new RichEmbed()
            .setTitle('• Paloma del Sol - Jailalai (Equatorial Guinea)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/7/73/HGE.png/revision/latest?cb=20190720043727")
            .addField('• Grand Final', '- Place: **19th** out of 20\n- Score: 32\n- Draw: 5th')
        message.channel.send(embed);
    } if (message.content === '?entry pt 2') {
        const embed = new RichEmbed()
            .setTitle('• Blaya - Eu Avisei (Portugal)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/HPO.png/revision/latest?cb=20190720040326")
            .addField('• Grand Final', '- Place: **6th** out of 20\n- Score: 151\n- Draw: 16th')
        message.channel.send(embed);
    } if (message.content === '?entry es 2') {
        const embed = new RichEmbed()
            .setTitle('• Antílopez - Prefiero (Spain)')
            .setDescription('- 2nd Eurovision Americas')
            .setColor('RED')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/41/HSP.png/revision/latest?cb=20190720030806")
            .addField('• Grand Final', '- Place: **14th** out of 20\n- Score: 91\n- Draw: 15th')
        message.channel.send(embed);



    } if (message.content === '?entry cr 3') {
        const embed = new RichEmbed()
            .setTitle('• Mia Paz - By The Ocean (Costa Rica)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/4a/HCR.png/revision/latest?cb=20190623032009")
            .addField('• Semi-Final 2', '- Place: **5th** out of 12\n- Score: N/D\n- Draw: 9th', true)
            .addField('• Grand Final', '- Place: **5th** out of 21\n- Score: 183\n- Draw: 3rd', true)
        message.channel.send(embed);
    } if (message.content === '?entry ca 3') {
        const embed = new RichEmbed()
            .setTitle('• Nelly Furtado - Phoenix (Canada)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a8/Heart_Canada.png/revision/latest?cb=20190428232337")
            .addField('• Semi-Final 1', '- Place: **7th** out of 13\n- Score: N/D\n- Draw: 1st', true)
            .addField('• Grand Final', '- Place: **4th** out of 21\n- Score: 204\n- Draw: 1st', true)
        message.channel.send(embed);
    } if (message.content === '?entry mx 3') {
        const embed = new RichEmbed()
            .setTitle('• Camila - Te Confieso (Mexico)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/0/0b/HMX.png/revision/latest?cb=20190623011321")
            .addField('• Semi-Final 2', '- Place: **6th** out of 12\n- Score: N/D\n- Draw: 12th', true)
            .addField('• Grand Final', '- Place: **14th** out of 21\n- Score: 114\n- Draw: 13th', true)
        message.channel.send(embed);
    } if (message.content === '?entry bm 3') {
        const embed = new RichEmbed()
            .setTitle('• Anavae - All Or Nothing (Bermuda)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/10/HBM.png/revision/latest?cb=20190623011122")
            .addField('• Semi-Final 2', '- Place: **2nd** out of 12\n- Score: N/D\n- Draw: 4th', true)
            .addField('• Grand Final', '- Place: **2nd** out of 21\n- Score: 274\n- Draw: 7th', true)
        message.channel.send(embed);
    } if (message.content === '?entry bz 3') {
        const embed = new RichEmbed()
            .setTitle('• Lloyd Augustine - Yugadan (Belize)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/fb/HBE.png/revision/latest?cb=20190623030011")
            .addField('• Semi-Final 1', '- Place: **12th** out of 13\n- Score: N/D\n- Draw: 10th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry co 3') {
        const embed = new RichEmbed()
            .setTitle('• Lola índigo & Lalo Ebratt - Maldición (Colombia)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/56/HCO.png/revision/latest?cb=20190626045330")
            .addField('• Semi-Final 1', '- Place: **1st** out of 13\n- Score: N/D\n- Draw: 6th', true)
            .addField('• Grand Final', '- Place: **3rd** out of 21\n- Score: 220\n- Draw: 19th', true)
        message.channel.send(embed);
    } if (message.content === '?entry sv 3') {
        const embed = new RichEmbed()
            .setTitle('• Sabi - Wild Heart (El Salvador)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d1/Heart_El_Salvador-0.png/revision/latest?cb=20190714041136")
            .addField('• Semi-Final 1', '- Place: **9th** out of 13\n- Score: N/D\n- Draw: 2nd', true)
            .addField('• Grand Final', '- Place: **18th** out of 21\n- Score: 87\n- Draw: 17th', true)
        message.channel.send(embed);
    } if (message.content === '?entry pe 3') {
        const embed = new RichEmbed()
            .setTitle('• We The Lion - So Fine (Peru)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a0/HPE.png/revision/latest?cb=20190626050345")
            .addField('• Semi-Final 1', '- Place: **5th** out of 13\n- Score: N/D\n- Draw: 8th', true)
            .addField('• Grand Final', '- Place: **7th** out of 21\n- Score: 169\n- Draw: 15th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ve 3') {
        const embed = new RichEmbed()
            .setTitle('• Nacho - Nadie Sabe (Venezuela)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a5/HVE.png/revision/latest?cb=20190824063140")
            .addField('• Semi-Final 2', '- Place: **11th** out of 12\n- Score: N/D\n- Draw: 11th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry us 3') {
        const embed = new RichEmbed()
            .setTitle('• Lizzo - Cuz I Love You (United States)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/53/HUS.png/revision/latest?cb=20190623024908")
            .addField('• Semi-Final 1', '- Place: **11th** out of 13\n- Score: N/D\n- Draw: 4th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry gf 3') {
        const embed = new RichEmbed()
            .setTitle('• Tal - Are We Awake (French Guiana)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/18/HFG.png/revision/latest?cb=20190623061536")
            .addField('• Semi-Final 2', '- Place: **4th** out of 12\n- Score: N/D\n- Draw: 2nd', true)
            .addField('• Grand Final', '- Place: **9th** out of 21\n- Score: 156\n- Draw: 14th', true)
        message.channel.send(embed);
    } if (message.content === '?entry br 3') {
        const embed = new RichEmbed()
            .setTitle('• Gaia - Fotogramas (Brazil)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/f9/HBR.png/revision/latest?cb=20190626044257")
            .addField('• Semi-Final 1', '- Place: **4th** out of 13\n- Score: N/D\n- Draw: 4th', true)
            .addField('• Grand Final', '- Place: **12th** out of 21\n- Score: 143\n- Draw: 16th', true)
        message.channel.send(embed);
    } if (message.content === '?entry cl 3') {
        const embed = new RichEmbed()
            .setTitle('• Camila Gallardo - Abrázame (Chile)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/9/94/HCH.png/revision/latest?cb=20190626044807")
            .addField('• Semi-Final 1', '- Place: **2nd** out of 13\n- Score: N/D\n- Draw: 12th', true)
            .addField('• Grand Final', '- Place: **1st** out of 21\n- Score: 279\n- Draw: 10th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ar 3') {
        const embed = new RichEmbed()
            .setTitle('• Duki ft. Khea - Hitboy (Argentina)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/fb/HAR.png/revision/latest?cb=20190626043318")
            .addField('• Semi-Final 2', '- Place: **9th** out of 12\n- Score: N/D\n- Draw: 8th', true)
            .addField('• Grand Final', '- Place: **21st** out of 21\n- Score: 21\n- Draw: 6th', true)
        message.channel.send(embed);
    } if (message.content === '?entry uy 3') {
        const embed = new RichEmbed()
            .setTitle('• El Cuarteto de Nos - Roberto (Uruguay)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d3/HUR.png/revision/latest?cb=20190626051455")
            .addField('• Semi-Final 2', '- Place: **8th** out of 12\n- Score: N/D\n- Draw: 1st', true)
            .addField('• Grand Final', '- Place: **13th** out of 21\n- Score: 116\n- Draw: 18th', true)
        message.channel.send(embed);
    } if (message.content === '?entry fk 3') {
        const embed = new RichEmbed()
            .setTitle('• Marina - Teen Idle (Falkland Islands)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d0/HMA.png/revision/latest?cb=20190626045415")
            .addField('• Semi-Final 1', '- Place: **3rd** out of 13\n- Score: N/D\n- Draw: 3rd', true)
            .addField('• Grand Final', '- Place: **16th** out of 21\n- Score: 18\n- Draw: 21st', true)
        message.channel.send(embed);
    } if (message.content === '?entry vi 3') {
        const embed = new RichEmbed()
            .setTitle('• Zella Day - Hypnotic (U.S. Virgin Islands)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/80/HVI.png/revision/latest?cb=20190624024205")
            .addField('• Semi-Final 1', '- Automatic qualified', true)
            .addField('• Grand Final', '- Place: **6th** out of 21\n- Score: 175\n- Draw: 12th', true)
        message.channel.send(embed);
    } if (message.content === '?entry vg 3') {
        const embed = new RichEmbed()
            .setTitle('• Larkins - TV Dreams (British Virgin Islands)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/3/38/HBI.png/revision/latest?cb=20190623053720")
            .addField('• Semi-Final 2', '- Place: **7th** out of 12\n- Score: N/D\n- Draw: 7th', true)
            .addField('• Grand Final', '- Place: **17th** out of 21\n- Score: 107\n- Draw: 8th', true)
        message.channel.send(embed);
    } if (message.content === '?entry tc 3') {
        const embed = new RichEmbed()
            .setTitle('• Lauren Aquilina - Kicks (Turks and Caicos)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/2/2c/Fvawcbacbvwauhc.png/revision/latest?cb=20190624023921")
            .addField('• Semi-Final 1', '- Place: **7th** out of 13\n- Score: N/D\n- Draw: 7th', true)
            .addField('• Grand Final', '- Place: **10th** out of 21\n- Score: 153\n- Draw: 4th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ky 3') {
        const embed = new RichEmbed()
            .setTitle('• Shellyann - Lovers Entwined (Cayman Islands)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d1/HCY-0.png/revision/latest?cb=20190623054124")
            .addField('• Semi-Final 1', '- Place: **13th** out of 13\n- Score: N/D\n- Draw: 9th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry cw 3') {
        const embed = new RichEmbed()
            .setTitle('• Kizzy - Seashells (Curazao)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/c/cc/HCU.png/revision/latest?cb=20190623060118")
            .addField('• Semi-Final 1', '- Place: **10th** out of 13\n- Score: N/D\n- Draw: 5th', true)
            .addField('• Grand Final', '- Place: **20th** out of 21\n- Score: 24\n- Draw: 11th', true)
        message.channel.send(embed);
    } if (message.content === '?entry gq 3') {
        const embed = new RichEmbed()
            .setTitle('• Paloma del Sol - Ëtulam (Equatorial Guinea)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/7/73/HGE.png/revision/latest?cb=20190720043727")
            .addField('• Semi-Final 1', '- Place: **8th** out of 13\n- Score: N/D\n- Draw: 13th', true)
            .addField('• Grand Final', '- Place: **19th** out of 21\n- Score: 66\n- Draw: 9th', true)
        message.channel.send(embed);
    } if (message.content === '?entry pt 3') {
        const embed = new RichEmbed()
            .setTitle('• April Ivy ft. Conductor - Frida (Portugal)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/HPO.png/revision/latest?cb=20190720040326")
            .addField('• Semi-Final 1', '- Place: **12th** out of 13\n- Score: N/D\n- Draw: 6th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry es 3') {
        const embed = new RichEmbed()
            .setTitle('• Fangoria - ¿Quién te Has Creído que Soy? (Spain)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/41/HSP.png/revision/latest?cb=20190720030806")
            .addField('• Semi-Final 2', '- Place: **3rd** out of 12\n- Score: N/D\n- Draw: 10th', true)
            .addField('• Grand Final', '- Place: **15th** out of 21\n- Score: 111\n- Draw: 20th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ai 3') {
        const embed = new RichEmbed()
            .setTitle('• Jorja Smith - The One (Anguilla)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/b/b5/HAN.png/revision/latest?cb=20190823012656")
            .addField('• Semi-Final 1', '- Place: **6th** out of 13\n- Score: N/D\n- Draw: 11th', true)
            .addField('• Grand Final', '- Place: **8th** out of 21\n- Score: 161\n- Draw: 2nd', true)
        message.channel.send(embed);
    } if (message.content === '?entry mq 3') {
        const embed = new RichEmbed()
            .setTitle('• Angie Robba - Freaking Day (Martinique)')
            .setDescription('- 3rd Eurovision Americas')
            .setColor('NAVY')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/83/HMT2.png/revision/latest?cb=20190823033357")
            .addField('• Semi-Final 2', '- Place: **1st** out of 12\n- Score: N/D\n- Draw: 3rd', true)
            .addField('• Grand Final', '- Place: **11th** out of 21\n- Score: 145\n- Draw: 5th', true)
        message.channel.send(embed);



    } if (message.content === '?entry cr 4') {
        const embed = new RichEmbed()
            .setTitle('• Barzo & Debi Nova - Paradise (Costa Rica)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/4a/HCR.png/revision/latest?cb=20190623032009")
            .addField('• Semi-Final 2', '- Place: **6th** out of 15\n- Score: 62\n- Draw: 15th', true)
            .addField('• Grand Final', '- Place: **9th** out of 21\n- Score: 183\n- Draw: 1st', true)
        message.channel.send(embed);
    } if (message.content === '?entry ca 4') {
        const embed = new RichEmbed()
            .setTitle('• Faouzia - This Mountain (Canada)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a8/Heart_Canada.png/revision/latest?cb=20190428232337")
            .addField('• Semi-Final 2', '- Place: **1st** out of 15\n- Score: 101\n- Draw: 3rd', true)
            .addField('• Grand Final', '- Place: **4th** out of 21\n- Score: 251\n- Draw: 2nd', true)
        message.channel.send(embed);
    } if (message.content === '?entry mx 4') {
        const embed = new RichEmbed()
            .setTitle('• MC Davo - Tengo Un Problema (Mexico)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/0/0b/HMX.png/revision/latest?cb=20190623011321")
            .addField('• Semi-Final 2', '- Place: **11th** out of 15\n- Score: 33\n- Draw: 9th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry bm 4') {
        const embed = new RichEmbed()
            .setTitle('• Emeli Sandé - Breathing Underwater (Bermuda)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/10/HBM.png/revision/latest?cb=20190623011122")
            .addField('• Semi-Final 2', '- Place: **3rd** out of 15\n- Score: 68\n- Draw: 12th', true)
            .addField('• Grand Final', '- Place: **10th** out of 21\n- Score: 157\n- Draw: 17th', true)
        message.channel.send(embed);
    } if (message.content === '?entry co 4') {
        const embed = new RichEmbed()
            .setTitle('• Ventino - Andan Diciendo (Colombia)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/56/HCO.png/revision/latest?cb=20190626045330")
            .addField('• Semi-Final 2', '- Place: **7th** out of 15\n- Score: 55\n- Draw: 7th', true)
            .addField('• Grand Final', '- Place: **13th** out of 21\n- Score: 136\n- Draw: 14th', true)
        message.channel.send(embed);
    } if (message.content === '?entry sv 4') {
        const embed = new RichEmbed()
            .setTitle('• Allison Iraheta - Friday I´ll Be Over You (El Salvador)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d1/Heart_El_Salvador-0.png/revision/latest?cb=20190714041136")
            .addField('• Semi-Final 1', '- Place: **9th** out of 15\n- Score: 52\n- Draw: 2nd', true)
            .addField('• Grand Final', '- Place: **14th** out of 21\n- Score: 135\n- Draw: 8th', true)
        message.channel.send(embed);
    } if (message.content === '?entry pe 4') {
        const embed = new RichEmbed()
            .setTitle('• We The Lion - I Want You to Know (Peru)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a0/HPE.png/revision/latest?cb=20190626050345")
            .addField('• Semi-Final 2', '- Place: **10th** out of 15\n- Score: 45\n- Draw: 4th', true)
            .addField('• Grand Final', '- Place: **20th** out of 21\n- Score: 91\n- Draw: 4th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ve 4') {
        const embed = new RichEmbed()
            .setTitle('• Guaco - Baja (Venezuela)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a5/HVE.png/revision/latest?cb=20190824063140")
            .addField('• Semi-Final 2', '- Place: **13th** out of 15\n- Score: 19\n- Draw: 6th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry sr 4') {
        const embed = new RichEmbed()
            .setTitle('• Yellow Claw ft. Rochelle - Shotgun (Suriname)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/f4/HSU.png/revision/latest?cb=20190914061630")
            .addField('• Semi-Final 2', '- Place: **8th** out of 15\n- Score: 51\n- Draw: 10th', true)
            .addField('• Grand Final', '- Place: **21st** out of 21\n- Score: 89\n- Draw: 15th', true)
        message.channel.send(embed);
    } if (message.content === '?entry us 4') {
        const embed = new RichEmbed()
            .setTitle('• Normani ft. 6LACK - Waves (United States)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/53/HUS.png/revision/latest?cb=20190623024908")
            .addField('• Semi-Final 1', '- Place: **5th** out of 15\n- Score: 59\n- Draw: 3rd', true)
            .addField('• Grand Final', '- Place: **5th** out of 21\n- Score: 237\n- Draw: 16th', true)
        message.channel.send(embed);
    } if (message.content === '?entry gf 4') {
        const embed = new RichEmbed()
            .setTitle('• Lea Paci - Adolescente Pirate (French Guiana)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/1/18/HFG.png/revision/latest?cb=20190623061536")
            .addField('• Semi-Final 1', '- Place: **2nd** out of 15\n- Score: 70\n- Draw: 13th', true)
            .addField('• Grand Final', '- Place: **11th** out of 21\n- Score: 153\n- Draw: 11th', true)
        message.channel.send(embed);
    } if (message.content === '?entry br 4') {
        const embed = new RichEmbed()
            .setTitle('• Renan Pitanga - Sax (Brazil)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/f9/HBR.png/revision/latest?cb=20190626044257")
            .addField('• Semi-Final 2', '- Place: **3rd** out of 15\n- Score: 68\n- Draw: 9th', true)
            .addField('• Grand Final', '- Place: **2nd** out of 21\n- Score: 259\n- Draw: 10th', true)
        message.channel.send(embed);
    } if (message.content === '?entry cl 4') {
        const embed = new RichEmbed()
            .setTitle('• We Are The Grand - Arráncame (Chile)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/9/94/HCH.png/revision/latest?cb=20190626044807")
            .addField('• Semi-Final 2', '- Automatic Qualified', true)
            .addField('• Grand Final', '- Place: **15th** out of 21\n- Score: 126\n- Draw: 19th', true)
        message.channel.send(embed);
    } if (message.content === '?entry py 4') {
        const embed = new RichEmbed()
            .setTitle('• Dalí - Puentes (Paraguay)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/5/5d/Heartpy.png/revision/latest?cb=20190727165058")
            .addField('• Semi-Final 1', '- Place: **8th** out of 15\n- Score: 54\n- Draw: 15th', true)
            .addField('• Grand Final', '- Place: **7th** out of 21\n- Score: 212\n- Draw: 20th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ar 4') {
        const embed = new RichEmbed()
            .setTitle('• Abel Pintos - Cien Años (Argentina)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/f/fb/HAR.png/revision/latest?cb=20190626043318")
            .addField('• Semi-Final 1', '- Place: **13th** out of 15\n- Score: 29\n- Draw: 5th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry uy 4') {
        const embed = new RichEmbed()
            .setTitle('• Micky Cohen - Warship (Uruguay)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d3/HUR.png/revision/latest?cb=20190626051455")
            .addField('• Semi-Final 1', '- Place: **4th** out of 15\n- Score: 65\n- Draw: 11th', true)
            .addField('• Grand Final', '- Place: **1st** out of 21\n- Score: 318\n- Draw: 12th', true)
        message.channel.send(embed);
    } if (message.content === '?entry fk 4') {
        const embed = new RichEmbed()
            .setTitle('• Dodie - Party Tattoos (Falkland Islands)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d0/HMA.png/revision/latest?cb=20190626045415")
            .addField('• Semi-Final 1', '- Place: **11th** out of 15\n- Score: 33\n- Draw: 4th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry pr 4') {
        const embed = new RichEmbed()
            .setTitle('• Tito El Bambino & Ana Isabelle - Contigo Siempre (Puerto Rico)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/9/98/HPR.png/revision/latest?cb=20190824064159")
            .addField('• Semi-Final 2', '- Place: **12th** out of 15\n- Score: 33\n- Draw: 13th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry vi 4') {
        const embed = new RichEmbed()
            .setTitle('• Sara Hartman - Monster Lead Me Home (U.S. Virgin Islands)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/80/HVI.png/revision/latest?cb=20190624024205")
            .addField('• Semi-Final 1', '- Place: **7th** out of 15\n- Score: 56\n- Draw: 11th', true)
            .addField('• Grand Final', '- Place: **12th** out of 21\n- Score: 142\n- Draw: 5th', true)
        message.channel.send(embed);
    } if (message.content === '?entry hn 4') {
        const embed = new RichEmbed()
            .setTitle('• Trooko - Pleader (Honduras)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/b/ba/HHO.png/revision/latest?cb=20190623051454")
            .addField('• Semi-Final 1', '- Place: **15th** out of 15\n- Score: 10\n- Draw: 12th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry tc 4') {
        const embed = new RichEmbed()
            .setTitle('• Emma Blackery - Nothing Without You (Turks and Caicos)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/2/2c/Fvawcbacbvwauhc.png/revision/latest?cb=20190624023921")
            .addField('• Semi-Final 1', '- Place: **6th** out of 15\n- Score: 57\n- Draw: 6th', true)
            .addField('• Grand Final', '- Place: **17th** out of 21\n- Score: 110\n- Draw: 13th', true)
        message.channel.send(embed);
    } if (message.content === '?entry ky 4') {
        const embed = new RichEmbed()
            .setTitle('• Fleur East - Favourite Thing (Cayman Islands)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/d/d1/HCY-0.png/revision/latest?cb=20190623054124")
            .addField('• Semi-Final 1', '- Place: **5th** out of 15\n- Score: 64\n- Draw: 2nd', true)
            .addField('• Grand Final', '- Place: **3rd** out of 21\n- Score: 254\n- Draw: 9th', true)
        message.channel.send(embed);
    } if (message.content === '?entry cw 4') {
        const embed = new RichEmbed()
            .setTitle('• Ephrem J - Mía Yo Te Haré (Curazao)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/c/cc/HCU.png/revision/latest?cb=20190623060118")
            .addField('• Semi-Final 1', '- Place: **15th** out of 15\n- Score: 16\n- Draw: 10th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry gq 4') {
        const embed = new RichEmbed()
            .setTitle('• Hijas del Sol - ¡Ay Corazón! (Equatorial Guinea)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/7/73/HGE.png/revision/latest?cb=20190720043727")
            .addField('• Semi-Final 2', '- Place: **14th** out of 15\n- Score: 16\n- Draw: 8th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry es 4') {
        const embed = new RichEmbed()
            .setTitle('• Brisa Fenoy - Ella (Spain)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/4/41/HSP.png/revision/latest?cb=20190720030806")
            .addField('• Semi-Final 2', '- Place: **11th** out of 15\n- Score: 42\n- Draw: 5th', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry ai 4') {
        const embed = new RichEmbed()
            .setTitle('• Jetta - Losing Control (Anguilla)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/b/b5/HAN.png/revision/latest?cb=20190823012656")
            .addField('• Semi-Final 2', '- Place: **13th** out of 15\n- Score: 29\n- Draw: 1st', true)
            .addField('• Grand Final', '- Did not qualify', true)
        message.channel.send(embed);
    } if (message.content === '?entry mq 4') {
        const embed = new RichEmbed()
            .setTitle('• Shake Shake Go - Dinosaur (Martinique)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/83/HMT2.png/revision/latest?cb=20190823033357")
            .addField('• Semi-Final 2', '- Place: **2nd** out of 15\n- Score: 74\n- Draw: 1st', true)
            .addField('• Grand Final', '- Place: **8th** out of 21\n- Score: 189\n- Draw: 7th', true)
        message.channel.send(embed);
    } if (message.content === '?entry gp 4') {
        const embed = new RichEmbed()
            .setTitle('• Co&Jane - Les Châteaux de Sable (Guadeloupe)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/0/0e/HGP.png/revision/latest?cb=20190915054943")
            .addField('• Semi-Final 1', '- Place: **1st** out of 15\n- Score: 84\n- Draw: 8th', true)
            .addField('• Grand Final', '- Place: **6th** out of 21\n- Score: 229\n- Draw: 3rd', true)
        message.channel.send(embed);
    } if (message.content === '?entry gl 4') {
        const embed = new RichEmbed()
            .setTitle('• Christopher - Heartbeat (Greenland)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/86/HGL.png/revision/latest?cb=20190915055138")
            .addField('• Semi-Final 1', '- Place: **10th** out of 15\n- Score: 50\n- Draw: 7th', true)
            .addField('• Grand Final', '- Place: **16th** out of 21\n- Score: 113\n- Draw: 21st', true)
        message.channel.send(embed);
    } if (message.content === '?entry aw 4') {
        const embed = new RichEmbed()
            .setTitle('• Marco, Armin & Davina - Hoe Het Danst (Aruba)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/8/8b/HAW.png/revision/latest?cb=20190915055312")
            .addField('• Semi-Final 1', '- Place: **4th** out of 15\n- Score: 64\n- Draw: 14th', true)
            .addField('• Grand Final', '- Place: **18th** out of 21\n- Score: 109\n- Draw: 6th', true)
        message.channel.send(embed);
    } if (message.content === '?entry nl 4') {
        const embed = new RichEmbed()
            .setTitle('• Valentina Elèni - Grijs (Caribbean Netherlands)')
            .setDescription('- 4th Eurovision Americas')
            .setColor('BLUE')
            .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a6/HCL.png/revision/latest?cb=20190915055501")
            .addField('• Semi-Final 2', '- Place: **9th** out of 15\n- Score: 49\n- Draw: 14th', true)
            .addField('• Grand Final', '- Place: **19th** out of 21\n- Score: 103\n- Draw: 18th', true)
        message.channel.send(embed);

    }              
});

client.on('message', message => {
    // Receiving the message
    if (message.content === '?help') {
        const embed = new RichEmbed()
        .setAuthor('EASCBot Commands Help', 'https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/Avatar_2.png/revision/latest/scale-to-width-down/480?cb=20190915060711')
        .setDescription('Find all the information about the commands of the EASCBot here.')
        .setColor('DARK_NAVY')
        .setThumbnail(url="https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/a/a3/Emoji_2.png/revision/latest/scale-to-width-down/480?cb=20190915060439")
        .addField('• **EASC Commands**', '**?entry** Gives information about an EASC entry, of a specific contest and a specific country.\n **?codes** Shows a list of the usable country codes.\n **?results** Gives the results of a specific contest.')
        .addField('• **Others**', '**?odds** Gives the role *odds* which allows to see the #odds channel.')
        .setFooter('Do not forget to always use the ? prefix on every command.')
    message.channel.send(embed);
    } if (message.content === '?codes') {
        const embed = new RichEmbed()
        .setAuthor('EASCBot Commands Help', 'https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/Avatar_2.png/revision/latest/scale-to-width-down/480?cb=20190915060711')
        .setDescription('Command: `?codes`')
        .setColor('DARK_NAVY')
        .addField('• 1-14', ':flag_ai: `ai` Anguilla\n:flag_ar: `ar` Argentina\n:flag_aw: `aw` Aruba\n:flag_fr: `fr` Atlantic France\n:flag_bz: `bz` Belize\n:flag_bm: `bm` Bermuda\n:flag_br: `br` Brazil\n:flag_vg: `vg` Brit. Virgin Islands\n:flag_ca: `ca` Canada\n:flag_nl: `nl` Carib. Netherlands\n:flag_ky: `ky` Cayman Islands\n:flag_cl: `cl` Chile\n:flag_co: `co` Costa Rica\n:flag_cu: `cu` Cuba', true)
        .addField('• 15- 28', ':flag_cw: `cw` Curazao\n:flag_dm: `dm` Dominica\n:flag_ec: `ec` Ecuador\n:flag_sv: `sv` El Salvador\n:flag_gq: `gq` Equatorial Guinea\n:flag_fk: `fk` Falkland Islands\n:flag_gf: `gf` French Guiana\n:flag_gl: `gl` Greenland\n:flag_gp: `gp` Guadeloupe\n:flag_hn: `hn` Honduras\n:flag_mq: `mq` Martinique\n:flag_mx: `mx` Mexico\n:flag_ms: `ms` Montserrat\n:flag_py: `py` Paraguay', true)
        .addField('• 29- 40', ':flag_pe: `pe` Peru\n:flag_pt: `pt` Portugal\n:flag_pr: `pr` Puerto Rico\n:flag_es: `es` Spain\n:flag_sr: `sr` Suriname\n:flag_ph: `ph` The Philippines\n:flag_tt: `tt` Trinidad & Tobago\n:flag_tc: `tc` Turks & Caicos\n:flag_us: `us` United States\n:flag_vi: `vi` U.S. Virgin Islands\n:flag_uy: `uy` Uruguay\n:flag_ve: `ve` Venezuela', true)
    message.channel.send(embed);
    } if (message.content === '?results 1') {
        const embed = new RichEmbed()
        .setAuthor('1st Eurovision Americas Results', 'https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/Avatar_2.png/revision/latest/scale-to-width-down/480?cb=20190915060711')
        .setColor('DARK_NAVY')
        .addField('• 1-7', '`01` :flag_ca: Canada • **98** \n`02` :flag_us: United States • **85** \n`03` :flag_cr: Costa Rica • **78** \n`04` :flag_vi: U.S. Virgin Islands • **75** \n`05` :flag_mx: Mexico • **74** \n`06` :flag_ky: Cayman Islands • **71** \n`07` :flag_cw: Curazao • **66**', true)
        .addField('• 8-13', '`08` :flag_hn: Honduras • **57** \n`09` :flag_gq: Equatorial Guinea • **53** \n`10` :flag_pe: Peru • **46** \n`11` :flag_bm: Bermuda • **41** \n`12` :flag_uy: Uruguay • **40** \n`13` :flag_ar: Argentina • **30**', true)        
        .setFooter('More information at our official wiki.')
    message.channel.send(embed);
    } if (message.content === '?results 2') {
         const embed = new RichEmbed()
         .setAuthor('2nd Eurovision Americas Results', 'https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/Avatar_2.png/revision/latest/scale-to-width-down/480?cb=20190915060711')
         .setColor('DARK_NAVY')
         .addField('• 1-10', '`01` :flag_vi: U.S. Virgin Islands • **276** \n`02` :flag_ca: Canada • **209** \n`03` :flag_bm: Bermuda • **208** \n`04` :flag_ky: Cayman Islands • **167** \n`05` :flag_ar: Argentina • **164** \n`06` :flag_pt: Portugal • **151** \n`07` :flag_cr: Costa Rica • **128**\n`08` :flag_br: Brazil • **120**\n`09` :flag_us: United States • **107**\n`10` :flag_vg: Brit. Virgin Islands • **103**', true)
         .addField('• 11-20', '`11` :flag_uy: Uruguay • **99** \n`12` :flag_gf: French Guiana • **94** \n`13` :flag_cl: Chile • **92** \n`14` :flag_es: Spain • **91** \n`15` :flag_fk: Falkland Islands • **83** \n`16` :flag_mx: Mexico • **82**\n`17` :flag_cw: Curazao • **64**\n`18` :flag_pe: Peru • **43**\n`19` :flag_gq: Equatorial Guinea • **30**\n`20` :flag_bz: Belize • **7**', true)        
         .setFooter('More information at our official wiki.')
    message.channel.send(embed);
     } if (message.content === '?results 3') {
    const embed = new RichEmbed()
    .setAuthor('3rd Eurovision Americas Results', 'https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/Avatar_2.png/revision/latest/scale-to-width-down/480?cb=20190915060711')
    .setColor('DARK_NAVY')
    .addField('• 1-11', '`01` :flag_cl: Chile • **279** \n`02` :flag_bm: Bermuda • **274** \n`03` :flag_co: Colombia • **220** \n`04` :flag_ca: Canada • **204** \n`05` :flag_cr: Costa Rica • **183** \n`06` :flag_vi: U.S. Virgin Islands • **175** \n`07` :flag_pe: Peru • **169**\n`08` :flag_ai: Anguilla • **161**\n`09` :flag_gf: French Guiana • **156**\n`10` :flag_tc: Turks & Caicos • **153**\n`11` :flag_mq: Martinique • **145**', true)
    .addField('• 12-21', '`12` :flag_br: Brazil • **143** \n`13` :flag_uy: Uruguay • **116** \n`14` :flag_mx: Mexico • **114** \n`15` :flag_es: Spain • **111** \n`16` :flag_fk: Falkland Islands • **108**\n`17` :flag_vg: Brit. Virgin Islands • **107**\n`18` :flag_sv: El Salvador • **87**\n`19` :flag_gq: Equatorial Guinea • **66**\n`20` :flag_cw: Curazao • **24**\n`21` :flag_ar: Argentina • **21**', true)        
    .setFooter('More information at our official wiki.')
message.channel.send(embed);
     } if (message.content === '?results 4') {
    const embed = new RichEmbed()
    .setAuthor('4th Eurovision Americas Results', 'https://vignette.wikia.nocookie.net/eurovisionamericassongcontest/images/e/e9/Avatar_2.png/revision/latest/scale-to-width-down/480?cb=20190915060711')
    .setColor('DARK_NAVY')
    .addField('• 1-11', '`01` :flag_uy: Uruguay • **318** \n`02` :flag_bm: Brazil • **259** \n`03` :flag_co: Cayman Islands • **254** \n`04` :flag_ca: Canada • **251** \n`05` :flag_us: United States • **237** \n`06` :flag_gp: Guadeloupe • **229** \n`07` :flag_py: Paraguay • **212**\n`08` :flag_mq: Martinique • **189**\n`09` :flag_cr: Costa Rica • **183**\n`10` :flag_bm: Bermuda • **157**\n`11` :flag_gf: French Guiana • **153**', true)
    .addField('• 12-21', '`12` :flag_vi: U.S. Virgin Islands • **142** \n`13` :flag_co: Colombia • **136** \n`14` :flag_sv: El Salvador • **135** \n`15` :flag_cl: Chile • **126** \n`16` :flag_gl: Greenland • **113**\n`17` :flag_tc: Turks & Caicos • **110**\n`18` :flag_aw: Aruba • **109**\n`19` :flag_nl: Carib. Netherlands • **103**\n`20` :flag_pe: Peru • **91**\n`21` :flag_sr: Suriname • **89**', true)        
    .setFooter('More information at our official wiki.')
message.channel.send(embed);
    }              
});



 client.login(token);