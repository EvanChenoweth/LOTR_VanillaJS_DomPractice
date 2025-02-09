console.log('Linked.')

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

const fellowshipMembers = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir', 'Frodo Baggins', 'Samwise "Sam" Gamgee', 'Meriadoc "Merry" Brandybuck', 'Peregrin "Pippin" Took']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', "middle-earth")

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		console.log(lands[i]);
		const newArticle = document.createElement('article')
		newArticle.setAttribute('id', lands[i])
		const newLand = document.createElement('h1')
		newLand.innerText = lands[i]
		newArticle.appendChild(newLand)
		middleEarth.appendChild(newArticle)
	}

	const DOM = document.querySelector('body')
	DOM.appendChild(middleEarth)


	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const ul = document.createElement("ul")
	ul.setAttribute('id', 'hobbitUL')

	for(let i = 0; i < hobbits.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "hobbits")
		li.setAttribute('id', 'hobbit' + [i])
		ul.appendChild(li)
		li.innerText = hobbits[i]
	}

	document.getElementById(lands[0]).appendChild(ul)
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')

	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	const frodo = document.getElementById('hobbit0')
	frodo.appendChild(theRing)
}
	

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddiesList = document.createElement("ul")

	for(let i = 0; i < baddies.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "baddies")
		li.setAttribute('id', 'baddies' + [i])
		baddiesList.appendChild(li)
		li.innerText = baddies[i]
	}

	document.getElementById(lands[2]).appendChild(baddiesList)
	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideTag = document.createElement('aside')
	asideTag.setAttribute('class', 'buddies')
	// put an `unordered list` of the `'buddies'` in the aside
	const ul = document.createElement("ul")

	for(let i = 0; i < buddies.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "buddies")
		li.setAttribute('id', 'buddies' + [i])
		ul.appendChild(li)
		li.innerText = buddies[i]
	}

	document.getElementById(lands[1]).appendChild(ul)
	// insert your aside as a child element of `rivendell`
	document.getElementById(lands[1]).appendChild(asideTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

		document.getElementById("hobbitUL").remove()
		if (i = 0) {
		console.log(`Removed the hobbits from The Shire.`)
		}

	const ul = document.createElement("ul")
	ul.setAttribute('id', 'hobbitUL')

	for(let i = 0; i < hobbits.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "hobbits")
		li.setAttribute('id', 'hobbit' + [i])
		ul.appendChild(li)
		li.innerText = hobbits[i]
	}

	document.getElementById(lands[1]).appendChild(ul)


	keepItSecretKeepItSafe()

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	document.getElementById('buddies3').innerHTML = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they 
	// have joined your party

	const rivendell = document.querySelector('#Rivendell')
	const theFellowship = document.createElement('div')
	theFellowship.setAttribute('id', 'the-fellowship')
	rivendell.appendChild(theFellowship)


	const ul = document.createElement("ul")

	for(let i = 0; i < hobbits.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "hobbits")
		li.setAttribute('id', 'hobbit' + [i])
		ul.appendChild(li)
		li.innerText = hobbits[i]
	}


	for(let i = 0; i < hobbits.length; i++) {
		document.getElementById('hobbit' + [i]).appendChild(theFellowship)
		window.alert(`${hobbits[i]} has joined your party.`)
	}
	
	for(let i = 0; i < buddies.length; i++) {
		document.getElementById('buddies' + [i]).appendChild(theFellowship)
		window.alert(`${buddies[i]} has joined your party.`)
	}
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border

	document.getElementById('buddies0').innerHTML = 'Gandalf the White'

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown

	window.alert('The horn of gondor has been blown!')

	// Boromir's been killed by the Uruk-hai!

	window.alert('Boromir has been slain by the Uruk-hai!')

	// Remove `Boromir` from the Fellowship

	document.getElementById("buddies4").remove()

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`

	document.getElementById('hobbit0').remove()
	document.getElementById('hobbit1').remove()

	const ul = document.createElement("ul")
	ul.setAttribute('id', 'hobbitUL') 

	for(let i = 0; i <= 1; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "hobbits")
		li.setAttribute('id', 'hobbit' + [i])
		ul.appendChild(li)
		li.innerText = hobbits[i]
	}

	document.getElementById(lands[2]).appendChild(ul)

	// add a div with an id of `'mount-doom'` to `Mordor`

	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id', 'mount-doom')
	document.getElementById(lands[2]).appendChild(mountDoom)

	keepItSecretKeepItSafe()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor

	let gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')

	document.getElementById(lands[2]).appendChild(gollum)

	// Remove `the ring` from `Frodo` and give it to `Gollum`

	document.getElementById('the-ring').remove()

	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')

	theRing.setAttribute('class', 'magic-imbued-jewelry')

	document.getElementById('gollum').appendChild(theRing)

	// Move Gollum into Mount Doom

	document.getElementById('gollum').remove()

	let gollumWithRing = document.createElement('div')
	gollum.setAttribute('id', 'gollum')


	document.getElementById('mount-doom').appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document

	document.getElementById('gollum').remove()

	// Move all the `hobbits` back to `the shire`

	document.getElementById('hobbit0').remove()
	document.getElementById('hobbit1').remove()
	document.getElementById('hobbit2').remove()
	document.getElementById('hobbit3').remove()

	window.alert('The Hobbits are returning home.')

	const ul = document.createElement("ul")
	ul.setAttribute('id', 'hobbitUL')

	for(let i = 0; i < hobbits.length; i++) {
		let li = document.createElement("li")
		li.setAttribute("class", "hobbits")
		li.setAttribute('id', 'hobbit' + [i])
		ul.appendChild(li)
		li.innerText = hobbits[i]
	}

	document.getElementById(lands[0]).appendChild(ul)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
