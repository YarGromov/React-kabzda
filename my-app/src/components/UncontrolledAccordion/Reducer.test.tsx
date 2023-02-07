import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed should be true', ()=>{
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(true)
})

test('function should return an error', ()=>{

    const state: StateType = {
        collapsed: false
    }

    expect(()=>{
        reducer(state, {type: 'FakeType'})
    }).toThrowError()
})