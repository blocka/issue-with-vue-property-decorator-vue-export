import { Vue as Vue1 } from 'vue-property-decorator';
import Vue2 from 'vue';

describe("issue with Vue export from VPD", () => {
	it("doesn't load Vue", () => {
		expect(Vue1).toBeUndefined();
	})

	it("doesn't load Vue", () => {
		expect(Vue2).toBeDefined();
	})
})
