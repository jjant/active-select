// import React from 'react';
// import { range } from 'lodash';
// import ActiveSelect from '../components/ActiveSelect/ActiveSelect';
//
// // const availableOptions = [
// //   { value: '1', label: 'Miami' },
// //   { value: '2', label: 'New York' },
// //   { value: '3', label: 'Seattle' },
// //   { value: '4', label: 'Sidney' },
// //   { value: '5', label: 'Buenos Aires' },
// //   { value: '6', label: 'London' },
// //   { value: '7', label: 'Paris' },
// //   { value: '8', label: 'Barcelona' },
// //   { value: '9', label: 'Prague' },
// // ];
// const availableOptions = range(10).map(i => ({ value: i, text: `text${i}` }));
//
// const CustomAvailableOptions = ({ option, selectOption }) => (
//   <div style={{ background: 'black', opacity: option.value / 10, width: '100%', height: '50px' }} onClick={() => { selectOption(); }} >
//     <span style={{ color: 'white', fontSize: 2 * option.value }}>Opacity and size go up with option.value ({option.value})!</span>
//   </div>
// );
//
// const CustomSelectedOption = ({ option }) => <span>{option.text}</span>;
//
// const CustomSelectComponent = ({ availableOptions, selectedOptions }) => {
//   const angleSeparation = (2 * Math.PI) / availableOptions.length;
//   return (
//     <div style={{ width: '400px', height: '400px', position: 'relative' }}>
//       <div style={{ height: '60px', width: '60px', borderRadius: '100%', background: 'rebeccapurple', position: 'absolute', left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         {selectedOptions}
//       </div>
//       {availableOptions.map((option, index) =>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '40px',
//           width: '40px',
//           borderRadius: '100%',
//           background: 'black',
//           color: 'white',
//           top: `${-100 * Math.sin(angleSeparation * index)}px`,
//           left: `${100 * Math.cos(angleSeparation * index)}px`,
//           transform: `translateX(180px) translateY(${180 - (40 * index)}px)`,
//           position: 'relative',
//         }}
//         >
//           {option}
//         </div>,
//       )}
//     </div>
//   );
// }
//
// class MyComponentTest extends React.Component {
//   state = {
//     selectedOptions: [],
//   }
//
//   onChange = s => this.setState(s)
//
//   render() {
//     return (
//       <ActiveSelect
//         onChange={this.onChange}
//         availableOptions={availableOptions}
//         selectedOptions={this.state.selectedOptions}
//         selectComponent={CustomSelectComponent}
//         selectedOptionComponent={CustomSelectedOption}
//         focused
//       />
//     );
//   }
// }
//
// stories.add('Focused', () => <ActiveSelect availableOptions={availableOptions} focused />)
//                          .add('With option selected', () => <ActiveSelect availableOptions={availableOptions} focused selectedOptions={[availableOptions[0]]} />)
//                          .add('With custom availableOptionComponent', () => <ActiveSelect availableOptions={availableOptions} focused selectedOptions={[availableOptions[0]]} availableOptionComponent={CustomAvailableOptions} />)
//                          .add('With custom selectComponent', () => <MyComponentTest />);
