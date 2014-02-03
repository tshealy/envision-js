// temporary spot for parse stuff . .
var Person = Parse.Object.extend("Person");
var AllPersons = Parse.Collection.extend({
	model: Person
})

var col = new AllPersons()


$(document).ready(function() {
	getCache()
})

function getCache() {
	envision = JSON.parse(sessionStorage.getItem('envision'));

	if (envision === null) {

		envision = {};

		envision.quality = {
			questions: [
				{
					number: 'QL1.1',
					synopsis: 'Improve community quality of life.',
					body: 'Improve the net quality of life of all communities affected by the project and mitigate negative impacts to communities.',
					addedValue: [
						{
							level: 'Improved',
							val: 2
						},
						{
							level: 'Enhanced',
							val: 5
						},
						{
							level: 'Superior',
							val: 10
						},
						{
							level: 'Conserving',
							val: 20
						},
						{
							level: 'Restorative',
							val: 25
						}
					]
				},
				{
					number: 'QL1.2',
					synopsis: 'Stimulate sustainable growth and development.',
					body: 'Support and stimulate sustainable growth and development, including improvements in job growth, capacity building, productivity, business attractiveness and livability.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 2
						},
						{
							level: 'Superior',
							val: 5
						},
						{
							level: 'Conserving',
							val: 13
						},
						{
							level: 'Restorative',
							val: 16
						}
					]
				},
				{
					number: 'QL1.3',
					synopsis: 'Develop local skills and capabilities.',
					body: 'Expand the knowledge, skills and capacity of the community workforce to improve their ability to grow and develop.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 2
						},
						{
							level: 'Superior',
							val: 5
						},
						{
							level: 'Conserving',
							val: 12
						},
						{
							level: 'Restorative',
							val: 15
						}
					]
				},
				{
					number: 'QL2.1',
					synopsis: 'Enhance public health and safety.',
					body: 'Take into account the health and safety implications of using new materials, technologies or methodologies above and beyond meeting regulatory requirements.',
					addedValue: [
						{
							level: 'Improved',
							val: 2
						},
						{
							level: 'Conserving',
							val: 16
						}
					]
				},
				{
					number: 'QL2.2',
					synopsis: 'Minimize noise and vibration.',
					body: 'Minimize noise and vibration generated during construction and in the operation of the constructed works to maintain and improve community livability.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Conserving',
							val: 8
						},
						{
							level: 'Restorative',
							val: 11
						}
					]
				},
				{
					number: 'QL2.3',
					synopsis: 'Minimize light pollution.',
					body: 'Prevent excessive glare, light at night, and light directed skyward to conserve energy and reduce obtrusive lighting and excessive glare.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 2
						},
						{
							level: 'Superior',
							val: 4
						},
						{
							level: 'Conserving',
							val: 8
						},
						{
							level: 'Restorative',
							val: 11
						}
					]
				},
				{
					number: 'QL2.4',
					synopsis: 'Improve community mobility and access.',
					body: 'Locate, design and construct the project in a way that eases traffic congestion, improves mobility and access, does not promote urban sprawl, and otherwise improves community livability.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 4
						},
						{
							level: 'Superior',
							val: 7
						},
						{
							level: 'Conserving',
							val: 14
						}
					]
				},
				{
					number: 'QL2.5',
					synopsis: 'Encourage alternative modes of transportation.',
					body: 'Improve accessibility to non-motorized transportation and public transit. Promote alternative transportation and reduce congestion.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 3
						},
						{
							level: 'Superior',
							val: 6
						},
						{
							level: 'Conserving',
							val: 12
						},
						{
							level: 'Restorative',
							val: 15
						}
					]
				},
				{
					number: 'QL2.6',
					synopsis: 'Improve site accessibility, safety and wayfinding.',
					body: 'Improve user accessibility, safety, and wayfinding of the site and surrounding areas.',
					addedValue: [
						{
							level: 'Enhanced',
							val: 3
						},
						{
							level: 'Superior',
							val: 6
						},
						{
							level: 'Conserving',
							val: 12
						},
						{
							level: 'Restorative',
							val: 15
						}
					]
				},
				{
					number: 'QL3.1',
					synopsis: 'Preserve historic and cultural resources.',
					body: 'Preserve or restore significant historical and cultural sites and related resources to preserve and enhance community cultural resources.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Superior',
							val: 7
						},
						{
							level: 'Conserving',
							val: 13
						},
						{
							level: 'Restorative',
							val: 16
						}
					]
				},
				{
					number: 'QL3.2',
					synopsis: 'Preserve views and local character.',
					body: 'Design the project in a way that maintains the local character of the community and does not have negative impacts on community views.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 3
						},
						{
							level: 'Superior',
							val: 6
						},
						{
							level: 'Conserving',
							val: 11
						},
						{
							level: 'Restorative',
							val: 14
						}
					]
				},
				{
					number: 'QL3.3',
					synopsis: 'Enhance public space.',
					body: 'Improve existing public space including parks, plazas, recreational facilities, or wildlife refuges to enhance community livability.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 3
						},
						{
							level: 'Superior',
							val: 6
						},
						{
							level: 'Conserving',
							val: 11
						},
						{
							level: 'Restorative',
							val: 13
						}
					]
				},
			]
		}

		envision.natural = {
			questions: [
				{
					number: 'NW1.1',
					synopsis: 'Preserve prime habitat.',
					body: 'Avoid placing the project – and the site compound/temporary works – on land that has been identified as of high ecological value or as having species of high value.',
					addedValue: [
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 14
						},
						{
							level: 'Restorative',
							val: 18
						}
					]
				},
				{
					number: 'NW1.2',
					synopsis: 'Protect wetlands and surface water.',
					body: 'Protect, buffer, enhance and restore areas designated as wetlands, shorelines, and waterbodies by providing natural buffer zones, vegetation and soil protection zones.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 4
						},
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 14
						},
						{
							level: 'Restorative',
							val: 18
						}
					]
				},
				{
					number: 'NW1.3',
					synopsis: 'Preserve prime farmland.',
					body: 'Identify and protect soils designated as prime farmland, unique farmland, or farmland of statewide importance.',
					addedValue: [
						{
							level: 'Superior',
							val: 6
						},
						{
							level: 'Conserving',
							val: 12
						},
						{
							level: 'Restorative',
							val: 15
						}
					]
				},
				{
					number: 'NW1.4',
					synopsis: 'Avoid adverse geology.',
					body: 'Avoid development in adverse geologic formations and safeguard aquifers to reduce natural hazards risk and preserve high quality groundwater resources.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 2
						},
						{
							level: 'Superior',
							val: 3
						},
						{
							level: 'Conserving',
							val: 5
						}
					]
				},
				{
					number: 'NW1.5',
					synopsis: 'Preserve floodplain functions.',
					body: 'Preserve floodplain functions by limiting development and development impacts to maintain water management capacities and capabilities.',
					addedValue: [
						{
							level: 'Improved',
							val: 2
						},
						{
							level: 'Enhanced',
							val: 5
						},
						{
							level: 'Superior',
							val: 8
						},
						{
							level: 'Conserving',
							val: 14
						}
					]
				},
				{
					number: 'NW1.6',
					synopsis: 'Avoid unsuitable development on steep slopes.',
					body: 'Protect steep slopes and hillsides from inappropriate and unsuitable development in order to avoid exposures and risks from erosion and landslides, and other natural hazards.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Superior',
							val: 4
						},
						{
							level: 'Conserving',
							val: 6
						}
					]
				},
				{
					number: 'NW1.7',
					synopsis: 'Preserve greenfields.',
					body: 'Conserve undeveloped land by locating projects on previously developed greyfield sites and/or sites classified as brownfields.',
					addedValue: [
						{
							level: 'Improved',
							val: 3
						},
						{
							level: 'Enhanced',
							val: 6
						},
						{
							level: 'Superior',
							val: 10
						},
						{
							level: 'Conserving',
							val: 15
						},
						{
							level: 'Restorative',
							val: 23
						}
					]
				},
				{
					number: 'NW2.1',
					synopsis: 'Manage stormwater.',
					body: 'Minimize the impact of infrastructure on stormwater runoff quantity and quality.',
					addedValue: [
						{
							level: 'Enhanced',
							val: 4
						},
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 17
						},
						{
							level: 'Restorative',
							val: 21
						}
					]
				},
				{
					number: 'NW2.2',
					synopsis: 'Reduce pesticide and fertilizer impacts.',
					body: 'Reduce non-point source pollution by reducing the quantity, toxicity, bioavailability and persistence of pesticides and fertilizers, or by eliminating the need for the use of these materials.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 2
						},
						{
							level: 'Superior',
							val: 5
						},
						{
							level: 'Conserving',
							val: 9
						}
					]
				},
				{
					number: 'NW2.3',
					synopsis: 'Prevent surface and groundwater contamination.',
					body: 'Preserve fresh water resources by incorporating measures to prevent pollutants from contaminating surface and groundwater and monitor impacts over operations.',
					addedValue: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Enhanced',
							val: 4
						},
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 14
						},
						{
							level: 'Restorative',
							val: 18
						}
					]
				},
				{
					number: 'NW3.1',
					synopsis: 'Preserve species biodiversity.',
					body: 'Protect biodiversity by preserving and restoring species and habitats.',
					addedValue: [
						{
							level: 'Improved',
							val: 2
						},
						{
							level: 'Conserving',
							val: 13
						},
						{
							level: 'Restorative',
							val: 16
						}
					]
				},
				{
					number: 'NW3.2',
					synopsis: 'Control invasive species.',
					body: 'Use appropriate non-invasive species and control or eliminate existing invasive species.',
					addedValue: [
						{
							level: 'Superior',
							val: 5
						},
						{
							level: 'Conserving',
							val: 9
						},
						{
							level: 'Restorative',
							val: 11
						}
					]
				},
				{
					number: 'NW3.3',
					synopsis: 'Restore disturbed soils.',
					body: 'Restore soils disturbed during construction and previous development to bring back ecological and hydrological functions.',
					addedValue: [
						{
							level: 'Conserving',
							val: 8
						},
						{
							level: 'Restorative',
							val: 10
						}
					]
				},
				{
					number: 'NW3.4',
					synopsis: 'Maintain wetland and surface water functions.',
					body: 'Maintain and restore the ecosystem functions of streams, wetlands, waterbodies and their riparian areas.',
					addedValue: [
						{
							level: 'Improved',
							val: 3
						},
						{
							level: 'Enhanced',
							val: 6
						},
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 15
						},
						{
							level: 'Restorative',
							val: 19
						}
					]
				}
			]
		}

		// envision.totalScore = 0;

		// for Conserving default
		envision.totalScore = conservingTotalScore(envision.quality.questions.concat(envision.natural.questions))

		envision.quality.DOM = {
			applicable: makeArray(envision.quality.questions.length, 0),
			// valueAdded: makeArray(envision.quality.questions.length, 0),
			// for Conserving default
			valueAdded: [4,4,4,2,2,4,4,4,3,3,4,4]
		}

		envision.natural.DOM = {
			applicable: makeArray(envision.natural.questions.length, 0),
			// valueAdded: makeArray(envision.natural.questions.length, 0),
			// for Conserving default
			valueAdded: [2,4,2,4,4,3,4,3,4,4,2,2,1,4]
		}

		// set explanation
		envision.quality.explanations = makeArray(envision.quality.questions.length, '');
		envision.natural.explanations = makeArray(envision.natural.questions.length, '');

		// set score
		envision.quality.scores = makeArray(envision.quality.questions.length, 0);
		envision.natural.scores = makeArray(envision.natural.questions.length, 0);

		// set question max points
		determineMaxPoints(envision.quality.questions.concat(envision.natural.questions))

		// create select drop down data
		processSelectOptions(envision.quality.questions.concat(envision.natural.questions))

		// envision total posible points
		envision.maxScore = maxScore(envision.quality.questions.concat(envision.natural.questions))

		// stores envision
		sessionStorage.setItem('envision', JSON.stringify(envision));
		
	}
}

function makeArray(length, item) {
	var array = [];
	for (var i = 0; i < length; i++) {
		array.push(item)
	}
	return array.slice()
}

// sets maxPoints each question based on return value of maxPoints function. also side-effectively sets envisions maxScore.
function determineMaxPoints(questions) {
	_.each(questions, function(question, index) {
		question.maxPoints = _.first(maxPoints(question.addedValue)).val
	})
}

// sorts vals to find greatest
function maxPoints(addedValue) {
	return addedValue.sort(function(a, b) {
		return b.val - a.val;
	})
}

function maxScore(questions) {
	var maxScore = 0;

	_.each(questions, function(question, index) {
		maxScore += question.maxPoints;
	})

	$('#max-score').text(maxScore)

	return maxScore;
}

// takes addedValue array of each question and generates option tags with correct values
function processSelectOptions(questions) {
	_.each(questions, function(question) {
		question.selectOptions = _.map(question.addedValue, function(val) {
			// return "<option value='" + val.val + "'>" + val.level + " (+" + val.val + ")</option>"
			// for Conservative default
			return "<option value=" + val.val + ">" + val.level + " (" + relate(question, val.val) + ")</option>"
		}).reverse().join('')
		// question.selectOptions = "<option class='no-value' value='0'>No Value Added (0)</option>" + question.selectOptions;
		// for Conservative default
		question.selectOptions = "<option class='no-value' value='0'>No Value Added (" + relate(question, 0) + ")</option>" + question.selectOptions;
	})
}

function conservingTotalScore(questions) {
	return _.reduce(_.map(questions, function(question) {
		return _.findWhere(question.addedValue, {level: 'Conserving'}).val
	}), function(memo, num) {return memo + num})
}












