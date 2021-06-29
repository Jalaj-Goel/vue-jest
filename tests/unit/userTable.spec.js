import { mount,shallowMount, flushPromises } from '@vue/test-utils';
import UserTable from '@/components/UserTable';
import axios from 'axios'
import { exportAllDeclaration } from '@babel/types';
// const wrapper = shallowMount(UserTable)


// jest.mock('axios',() => ({
//     get: () => jest.fn(() => Promise.resolve({data : {}}))
// }))

// test('should console the value',async()=>{
//     const wrapper = mount(UserTable)
//     // await wrapper.get('table')
//     expect(axios.get())
// })

it('fetch',() => {
    const wrapper = mount(UserTable)
   expect(axios.get())
})