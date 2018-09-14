import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";


// lesson4
// export const divTrigger = trigger('divTrigger', [
//   // void - отсутсвие элемента в доме void => *
//   // * любое состояние
//   // :enter void => *
//   // * => void :leave
//   transition(':enter', [
//     style({
//       opacity: 0
//     }),
//     animate(500, style({
//       opacity: 1
//     }))
//   ]),
//   transition(':leave', [
//     style({
//       opacity: 1
//     }),
//     animate(500, style({
//       opacity: 0
//     }))
//   ]),
// ]);

//lesson6
export const divTrigger = trigger('divTrigger', [
  transition(':enter', [
    style({
      width: '*',
      height: '*',
    }),
    // групповые анимации начинают работать вместе
    group([
      animate(3000, style({
        width: '200px',
        height: '200px',
        backgroundColor: 'blue'
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'blue'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'green'}),
      ])),
    ]),
  ]),
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate(500, style({
      opacity: 0
    }))
  ]),
]);


export const changeWidthTrigger = trigger('changeWidth', [
  transition('* => *', [
    animate(1000, style({
      width: '10px'
    })),
      animate(1000, style({
        width: '*' // * до изнач значения (работает с шириной и высотой)
      }))
    ])
]);