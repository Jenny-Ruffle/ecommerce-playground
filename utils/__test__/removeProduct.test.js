import { removeProduct } from "../removeProduct";

const mockProducts = [{key: 2345}, {key: 134}, {key: 746}]

describe('removeProductByKey', () => {        
    it('remove an object with matching key from array', async () => {
        const newArray = removeProduct(mockProducts, 2345);
        expect(newArray).toEqual([{key: 134}, {key: 746}]);
    });
});
