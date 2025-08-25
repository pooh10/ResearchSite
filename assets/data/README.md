# ReflectAI Research Data

This directory contains the anonymized survey data from the ReflectAI study.

## Files

- **`pre_survey.csv`** - Baseline participant data collected before using ReflectAI
- **`post_survey.csv`** - Post-study participant data collected after using ReflectAI
- **`Abstract.pdf`** - Research abstract and methodology

## Data Structure

### Pre-survey Columns
- `Participant_ID` - Anonymous identifier (P1-P6)
- `Openness_to_Reflection` - Self-reported openness to reflection (1-5 scale)
- `Confidence_in_Emotional_Understanding` - Confidence in understanding emotions (1-5 scale)
- `Minutes_per_Journaling_Session` - Expected journaling session duration
- `Expected_Benefit_Score` - Expected benefit from AI-assisted journaling (1-5 scale)
- `Notes` - Qualitative observations

### Post-survey Columns
- `Participant_ID` - Anonymous identifier (P1-P6)
- `Openness_to_Reflection` - Post-study openness to reflection (1-5 scale)
- `Confidence_in_Emotional_Understanding` - Post-study confidence in understanding emotions (1-5 scale)
- `Minutes_per_Journaling_Session` - Actual average session duration
- `Perceived_Improvement_Score` - Perceived improvement from using ReflectAI (1-5 scale)
- `Notes` - Qualitative feedback and observations

## Anonymization

All participant data has been anonymized:
- No personal identifiers or demographics
- No email addresses or contact information
- No specific dates or timestamps
- Participant IDs are randomly assigned (P1-P6)

## Study Details

- **Participants**: 6 undergraduate students
- **Duration**: 10-14 days per participant
- **Platform**: ReflectAI prototype (React + Firebase + OpenAI)
- **Institution**: Drexel University
- **Research Focus**: AI-assisted journaling for emotional awareness
