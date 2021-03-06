

import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import styled from 'styled-components';
<<<<<<< HEAD
import BalloonBlockEditor from './build/ckeditor'


const Wrapper = styled.div`
    .ck.ck-editor__editable_inline{
	   border:1px solid #007eff !important;
	   min-height: 100px !important;
   }
`;


const configuration = {	
	   
	toolbar: {
		items: [
			'heading', 'heading1', 'heading2', 'heading3','paragraph',
			
			'bold','italic','underline','link', 
			'|',
				'alignment',	'removeFormat',
			'|','highlight',
			"|",
			'undo',
            'redo'
		
		],
	},
	language: 'en',
	blockToolbar:[
		'paragraph',
		'|',
			'ckfinder','imageUpload',
		'|',
		'bulletedList', 'numberedList', 
		'|',
		'blockQuote',	'codeBlock',	'code',
		'|',
		'horizontalLine',
		'|',
		'insertTable',
		'mediaEmbed'		 
	],
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	ckfinder: {
	    options: {
			resourceType: 'Images'
		}
	},
	licenseKey: '',
	
	placeholder: 'Start Writting'
}
=======




const Wrapper = styled.div`
  border:1px solid grey;
  min-height:150px;

  :hover{
    border-color:blue;
  }
  
  > div {
    min-height:150px;
  }
`;


>>>>>>> 1078d2f0caf60f632a0b256bf331af68bcadae16


const Editor = ({ onChange, name, value }) => {

  return (
    <Wrapper>
	
		<CKEditor
			editor={BalloonBlockEditor}
			config={configuration}
			data={value}
			onChange={(event, editor) => {
			 const data = editor.getData();
		 	 onChange({ target: { name, value: data } });
			}}
		/>

    </Wrapper>
  );
};

Editor.propTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
};


export default Editor;