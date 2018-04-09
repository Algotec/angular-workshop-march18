import {IUIElementObj} from '@algotec/wmdl-webkit';

const basicFields = [
  {
    'elementModel': {
      'validators': [{type: 'required'}],
      'text': 'Username',
    },
    'type': 'TextBoxModel',
    'toolID': 'username'
  },
  {
    'elementModel': {
      'validators': [{type: 'required'}, {type: 'minlength', value: 5, errorMsg: 'please make password longer than 5'}],
      'text': 'Password',
    },
    'type': 'TextBoxModel',
    'toolID': 'password'
  }
];

export function getBaseFormGroup(loginOnly: boolean) {
  const basic = {
    'children': (loginOnly) ? basicFields : [...basicFields, retype],
    'elementModel': {
      'label': (loginOnly) ? 'Login' : 'Registration',
      'separator': true,
      'type': 'FormGroupContainerModel',
    },
    'type': 'FormGroupContainerModel',
    'toolID': 'formGroupDemo'
  };
  return loginOnly ? [basic] : [basic, ...moreFields];
}

const formBase = {
  toolID: 'userDetailsForm',
  elementModel: {
    'showCloseButton': true,
    'modal': false,
    'type': 'DialogModel',
    'autoFocus': false,
    'text': 'User Details'
  },
  type: 'DialogModel',
  children: [
    {
      'children': [
        {
          'children': [
            {
              'options': {
                'buttonType': 'RegularLink',
                'showText': true,
                'showIcon': false
              },
              'elementModel': {
                'dialogResult': 'Cancel',
                'text': 'Cancel'
              },
              'type': 'FormButtonModel',
              'toolID': 'cancel'
            }
          ],
          'type': 'ElementsBarModel',
          'toolID': 'footer.left'
        },
        {
          'children': [{
            'options': {
              'buttonType': 'RegularButton',
              'showText': true,
              'showIcon': false
            },
            'elementModel': {
              'dialogResult': 'OK',
              'type': 'FormButtonModel',
              'text': 'OK'
            },
            'type': 'FormButtonModel',
            'toolID': 'ok'
          }]
          ,
          'type': 'ElementsBarModel',
          'toolID': 'footer.right'
        }
      ],
      'type': 'FooterModel',
      'toolID': 'footerContainer'
    }
  ]
};

export function getUserDetailsForm(loginOnly: boolean) {
  const form = {...formBase};
  form.children = [...getBaseFormGroup(loginOnly), ...form.children];
  return form;
}

const retype = {type: 'TextBoxModel', elementModel: {text: 'Retype Password'}, toolID: 'retype_password'};
const moreFields: IUIElementObj[] = [
  {
    'type': 'FormGroupContainerModel',
    elementModel: {
      label: 'Address',
      separator: true
    },
    'toolID': 'address',
    'children': [{
      'type': 'ColumnsContainerModel',
      'toolID': 'columnsContainer1',
      children: [
        {
          'options': {
            'controlWidth': 'XL'
          },
          'elementModel': {
            'text': 'Street',
          },
          'type': 'TextBoxModel',
          'toolID': 'street'
        },
        {
          'elementModel': {
            'text': 'Street',
          },
          'type': 'TextBoxModel',
          'toolID': 'city'
        },
        {
          'elementModel': {
            'text': 'Zip',
          },
          'type': 'NumberModel',
          'toolID': 'zip'
        }
      ]
    }],
  }];


const rowDemo = [{
  'children': [
    {
      'children': [
        {
          'options': {
            'direction': 'HORIZONTAL',
            'controlWidth': 'S'
          },
          'elementModel': {
            'type': 'RadioGroupModel',
            'items': [
              {
                'label': 'whole',
                'value': 'whole',
                'selected': true
              },
              {
                'label': 'sub',
                'value': 'sub'
              }
            ],
            'value': 'whole'
          },
          'type': 'RadioGroupModel',
          'toolID': 'radio_volumeType'
        }
      ],
      'options': {
        'controlWidth': 'L'
      },
      'type': 'RowsContainerModel',
      'toolID': 'rowsContainer1'
    }],

}];
