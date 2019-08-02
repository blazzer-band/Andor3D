"use strict"
// локальный пользователь получающий запросы(из ядра) на данные и управляющий рендером
// Для каждого локального хранится собственный класс в firebase

class LocalAgent extends AbstractAgent{

	constructor(userIndicator){
		super();
		this.userIndicator = userIndicator;
	}

	updateFirebase(action) {
		let db = firebase.database();
		let player = this.userIndicator;
		db.ref('Rooms/' + globalRoomIndicator + '/Game/Players/' + player  + '/Action').set(action);
		
	}

	serializeObject(name, data){
		let temp = {}
		temp[name] = data;
		return temp
	}


	selectCard(cards, callback){
		let agent = this;
		game.getRender.startTimer(600);
		game.getRender.selectCard(cards, endSelect);

		function endSelect(sel){
			game.getRender.stopSelect();
			game.getRender.stopTimer();
			// Вместо комментария вставить отправку sel в файрбайз
			agent.updateFirebase(agent.serializeObject('selectCard', sel))
			callback(sel);
		}
	}

	setHand(cardIds){
		game.getRender.setHand(cardIds)
	}


	programming(callback){
		game.getRender.programming(callback)
	}

	setStacks(stacks){
		game.getRender.setStacks(stacks)
	}

	chooseRotate(rotateArray, callback){
		game.getRender.chooseRotate(rotateArray, callback)
	}

	selectCells(cellsArray, highlight, count, callback) {
		game.getRender.selectCells(cellsArray, highlight, count, callback);
	}

	selectStacks(cellsArray, count, callback) {
		game.getRender.selectStacks(cellsArray, count, callback);
	}
}