import React from 'react';
import styles from './SkillsInput.module.css';

const SkillsInput = ({ 
  selectedSkills = [], 
  onOpenModal = () => {}, 
  onRemoveSkill = () => {} 
}) => {
  const getPlaceholderText = () => {
    if (selectedSkills.length > 0) {
      return `${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected`;
    }
    return 'Add skills';
  };

  return (
    <div>
      <div className={styles.skillsInputWrapper}>
        <input
          type="text"
          className={`${styles.formInput} ${styles.skillsInput}`}
          placeholder={getPlaceholderText()}
          readOnly
          onClick={onOpenModal}
          aria-label="Selected skills input"
          aria-describedby="skills-help"
        />
        <button 
          className={styles.addSkillBtn} 
          onClick={onOpenModal}
          aria-label="Add new skill"
        >
          Add
        </button>
      </div>
      <div id="skills-help" className="sr-only">
        Click to open skills selection modal. Selected skills will appear as removable chips below.
      </div>
      
      {selectedSkills.length > 0 && (
        <div className={styles.selectedSkills}>
          {selectedSkills.map((skill, index) => (
            <span key={skill || index} className={styles.skillChip}>
              {skill}
              <button
                className={styles.skillChipRemove}
                onClick={() => onRemoveSkill(skill)}
                aria-label={`Remove ${skill} skill`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsInput;