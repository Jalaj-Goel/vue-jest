import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const wrapper = shallowMount(HelloWorld)

describe('HelloWorld.vue', () => {
  it('checks data', () => {
    // const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      methods: {submitForm:()=>{}}
    })
    expect(wrapper.vm.$data.formValues.uname).toBe('q')
  })
  
  it('h1 exists', () =>{
    expect(wrapper.find('h1').text()).toBe('Form')
  })

  it('trigger click', () =>{
    expect(wrapper.find('button').trigger('click'))
  })
})
