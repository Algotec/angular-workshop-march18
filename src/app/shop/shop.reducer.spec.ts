import {shopReducer} from './shop.reducer';
import {ADD_TO_CART, AddToCartAction, RemoveFromCartAction} from './shop.actions';

describe('shop reducer', function () {

  it('returns a new modified state for ADD_TO_CART action', () => {
    const testItem: IShopItem = {name: 'test', price: 1, _id: 0};
    const initialState: IShopState = {items: [testItem], shoppingCart: []};
    const newState = shopReducer(initialState, new AddToCartAction(0));
    expect(newState).not.toEqual(initialState);
    expect(newState.shoppingCart).not.toEqual(initialState.shoppingCart);
    expect(newState.shoppingCart.length).toEqual(1);
    expect(newState.items).toEqual(initialState.items);
  });
  it('returns a new modified state for REMOVE_FROM_CART action,removing 1 item from shopping list', () => {
    const testItem: IShopItem = {name: 'test', price: 1, _id: 0};
    const initialState: IShopState = {items: [testItem], shoppingCart: [testItem, testItem]};
    const newState = shopReducer(initialState, new RemoveFromCartAction(0));
    expect(newState).not.toEqual(initialState);
    expect(newState.shoppingCart).not.toEqual(initialState.shoppingCart);
    expect(newState.shoppingCart.length).toEqual(1);
    expect(newState.items).toEqual(initialState.items);
  });
});

