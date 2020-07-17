const Store = require('electron-store');
const {randomBytes} = require('crypto');
import config from '../config.js';

export default class CustomStore extends Store {
	
	/**
	 * @param {string} cwd The folder name that identifies this app
	 * @returns {CustomStore}
	*/
	constructor(cwd) {
		super({cwd})
	}

	/**
	 * Stores the default values.
	 * @returns {CustomStore}
	*/
	setDefaults() {
		this.setMinRam(config.defaultMinRam)
		this.setMaxRam(config.defaultMaxRam)
		this.setRandomClientToken()
		this.set('clientToken', null)
		return this
	}

	/**
	 * Stores a new random clientToken in the Store.
	 * @returns {CustomStore}
	*/
	setRandomClientToken() {
		this.set('clientToken', randomBytes(256).toString('hex'))
		return this
	}

	/**
	 * Retrieve the clientToken of the current logged-in user from the Store.
	 * @returns {string} The clientToken for invalidate or refresh accessToken
	*/
	getClientToken() {
		return this.get('clientToken')
	}

	/**
	 * Stores the the accessToken of the current logged-in user.
	 * @returns {CustomStore}
	*/
	setAccessToken(accessToken) {
		this.set('accessToken', accessToken)
		return this
	}

	/**
	 * Retrieve the accessToken of the current logged-in user from the Store.
	 * @returns {string} The accessToken of the current logged-in user
	*/
	getAccessToken() {
		return this.get('accessToken')
	}

	/**
	 * Stores the Maximum JVM RAM in Bytes.
	 * @param {int} Maximum JVM RAM in Bytes
	 * @returns {CustomStore}  
	*/
	setMaxRam(maxRam) {
		this.set('maxRam', maxRam)
		return this
	}

	/**
	 * Retrieve Maximum JVM RAM in Bytes from the Store.
	 * @returns {int} Maximum JVM RAM in Bytes
	*/
	getMaxRam() {
		return this.get('maxRam')
	}

	/*
	 * Stores the Minimum JVM RAM in Bytes.
	 * @param {int} Minimum JVM RAM in Bytes
	 * @returns {CustomStore}
	*/
	setMinRam(minRam) {
		this.set('minRam', minRam)
		return this
	}

	/**
	 * Retrieve Minimum JVM RAM in Bytes from the Store.
	 * @returns {int} Minimum JVM RAM in Bytes
	*/
	getMinRam() {
		return this.get('minRam')
	}
}
