function handleClick(button, subcontrol = false) {
if (!subcontrol) {
    let otherButtons = document.querySelectorAll('[class*=option-]')
    let otherButtons1 = document.querySelectorAll('[class*=suboption-]')
    let otherActive = document.querySelectorAll('[class*=active-]')
    let otherActive1 = document.querySelectorAll('[class*=subactive-]')
    let group = [...otherButtons, ...otherButtons1, ...otherActive, ...otherActive1]
    group.forEach(b => {
    b.style.visibility = 'hidden'
    b.style.opacity = 0
    } )
                
    let control = document.querySelector(`.option-${button}`)
    let active =  document.querySelector(`.active-${button}`)

    if (control.classList.contains('active')) {
    control.style.visibility = 'hidden'
    control.style.opacity = 0;
    control.classList.remove('active')
    active.style.visibility = 'hidden'
    active.style.opacity = 0;
    } else {
    control.style.visibility = 'visible'
    control.style.opacity = 1;
    control.classList.add('active')
    active.style.visibility = 'visible'
    active.style.opacity = 1;
    }
    
    } else {
    let otherButtons1 = document.querySelectorAll('[class*=suboption-]')
    let otherActive1 = document.querySelectorAll('[class*=subactive-]')
    let group = [ ...otherButtons1, ...otherActive1]
    group.forEach(b => {
    b.style.visibility = 'hidden'
    b.style.opacity = 0
    } )
    let subcontrol = document.querySelector(`.suboption-${button}`)
    let subactive =  document.querySelector(`.subactive-${button}`)
    if (subcontrol && subactive) {
        subcontrol.style.visibility = 'visible'
        subcontrol.style.opacity = 1;
        subactive.style.visibility = 'visible'
        subactive.style.opacity = 1;
    }
    }
}