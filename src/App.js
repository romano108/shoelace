'use client';

import { useState } from 'react';
import {
  SlButton,
  SlInput,
  SlDialog,
  SlDropdown,
  SlMenuItem,
  SlSwitch,
} from '@shoelace-style/shoelace/dist/react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const items = [
    { id: 'option-1', label: 'Option 1' },
    { id: 'option-2', label: 'Option 2' },
    { id: 'option-3', label: 'Option 3' },
  ];

  return (
    <div>
      <h1>REPO PAGE</h1>

      {/* Text Input for Searching Repositories */}
      <SlInput
        label="Search Repositories"
        placeholder="Enter repo name"
        style={{ marginBottom: '20px', width: '300px' }}
      ></SlInput>

      {/* Button to Open Modal */}
      <SlButton variant="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </SlButton>

      {/* Modal for Repository Info */}
      <SlDialog
        label="Repository Info"
        open={isModalOpen}
        onSlRequestClose={() => setModalOpen(false)}
      >
        <p>This is an overlay to show repository details.</p>
        <SlButton
          slot="footer"
          variant="primary"
          onClick={() => setModalOpen(false)}
        >
          Close
        </SlButton>
      </SlDialog>

      {/* Dropdown for Selecting Options */}
      <SlDropdown label="Choose an option">
        <SlButton slot="trigger" caret>
          Select Option
        </SlButton>
        {items.map((item) => (
          <SlMenuItem
            key={item.id}
            value={item.id}
            onClick={() => setSelectedOption(item.label)}
          >
            {item.label}
          </SlMenuItem>
        ))}
      </SlDropdown>

      {/* Content Switcher */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <SlSwitch
          checked={selectedOption === 'Option 1'}
          onClick={() => setSelectedOption('Option 1')}
        >
          First
        </SlSwitch>
        <SlSwitch
          checked={selectedOption === 'Option 2'}
          onClick={() => setSelectedOption('Option 2')}
        >
          Second
        </SlSwitch>
        <SlSwitch
          checked={selectedOption === 'Option 3'}
          onClick={() => setSelectedOption('Option 3')}
        >
          Third
        </SlSwitch>
      </div>
    </div>
  );
}

export default App;
