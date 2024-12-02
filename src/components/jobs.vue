<template>
  <section class="section" id="jobs">
    <div class="container">
      <h2
        class="title is-4 has-text-weight-semibold has-text-centered has-text-white"
      >
        Where I’ve Worked
      </h2>

      <div class="columns is-variable is-6">
        <!-- Tabs Section -->
        <div class="column is-3">
          <div class="custom-tabs" role="tablist" @keydown="onKeyDown">
            <ul>
              <li
                v-for="(job, index) in jobsData"
                :key="job.node.id"
                :class="{ 'is-active': activeTabId === index }"
                @click="setActiveTabId(index)"
                role="tab"
                :aria-selected="activeTabId === index"
                :tabindex="activeTabId === index ? 0 : -1"
                :id="`tab-${index}`"
                class="tab-item"
              >
                <a>{{ job.node.company }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Content Panels -->
        <div class="column">
          <transition-group name="slide" mode="out-in">
            <div
              v-for="(job, index) in jobsData"
              :key="job.node.id"
              v-show="activeTabId === index"
              role="tabpanel"
              :aria-labelledby="`tab-${index}`"
              :id="`panel-${index}`"
              class="box content-panel"
            >
              <h3 class="title is-5 has-text-white">
                <span>{{ job.node.title }}</span>
                <span class="has-text-primary">
                  &nbsp;@&nbsp;
                  <a :href="job.node.url" class="is-link">
                    {{ job.node.company }}
                  </a>
                </span>
              </h3>
              <p class="subtitle is-6 has-text-grey-light">
                {{ job.node.range }}
              </p>
              <div
                v-html="job.node.content"
                class="has-text-grey-light styled-content"
              ></div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jobs',
  data() {
    return {
      activeTabId: 0,
      tabFocus: null,
    };
  },
  props: {
    jobsData: {
      type: Array, // Gridsome's GraphQL `edges` will come as an object
      required: true,
    },
  },
  methods: {
    setActiveTabId(id) {
      this.activeTabId = id;
    },
    onKeyDown(event) {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.tabFocus =
          this.activeTabId - 1 >= 0
            ? this.activeTabId - 1
            : this.jobsData.length - 1;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.tabFocus = (this.activeTabId + 1) % this.jobsData.length;
      }
      if (this.tabFocus !== null) this.activeTabId = this.tabFocus;
    },
  },
};
</script>

<style>
/* Vertical Tabs (Default) */
.custom-tabs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* Reduced spacing between tabs */
  padding: 0;
  list-style: none;
  margin: 0;
  border-left: 1px solid #2d3952; /* Divider for the tabs */
}

/* Horizontal Tabs on Mobile */
@media (max-width: 768px) {
  .custom-tabs {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.25rem; /* Minimized gap between horizontal tabs */
    border-left: none; /* Remove vertical border on mobile */
    border-bottom: 1px solid #2d3952; /* Horizontal divider */
    padding-bottom: 0.25rem; /* Reduced padding */
  }
  .custom-tabs ul {
    display: flex;
    gap: 0.25rem; /* Reduce gap between list items */
  }
  .custom-tabs .tab-item {
    flex-shrink: 0; /* Prevent shrinking for horizontal scrolling */
  }
}

/* Individual Tab Item */
.custom-tabs ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.custom-tabs .tab-item a {
  display: block;
  padding: 0.25rem 0.5rem; /* Reduced padding for compact appearance */
  font-size: 0.85rem; /* Slightly smaller font for compactness */
  text-transform: uppercase;
  color: #888; /* Inactive tab color */
  font-family: 'Roboto Mono', monospace;
  border-left: 2px solid transparent;
  transition: all 0.3s ease-in-out;
}

.custom-tabs .tab-item.is-active a {
  color: #64ffda; /* Active tab color */
  border-left-color: #64ffda;
  font-weight: bold;
}

@media (max-width: 768px) {
  .custom-tabs .tab-item.is-active a {
    border-left: none;
    border-bottom: 2px solid #64ffda; /* Bottom border for horizontal tabs */
  }
}

.custom-tabs .tab-item:hover a {
  color: #64ffda; /* Hover color */
}

/* Content Panel Styling */
.content-panel {
  padding: 1rem 1.5rem;
  background-color: #112240;
  border-radius: 5px;
  color: #ffffff;
}

.content-panel .has-text-white {
  color: #ffffff;
}

.content-panel .has-text-grey-light {
  color: #a8b2d1;
}

/* Styled Content (li Styling) */
.styled-content ul {
  padding-left: 1.5rem;
}

.styled-content ul li {
  position: relative;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.styled-content ul li::before {
  content: '▹';
  position: absolute;
  left: -1rem;
  color: #64ffda;
  font-size: 14px;
  line-height: 12px;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.51s ease, opacity 0.51s ease; /* Adjusted to 70% slower */
  position: absolute;
  width: 100%; /* Ensures the panels take up the same space */
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%); /* Enter: Slide in from the right */
}

.slide-leave-active {
  transform: translateX(-100%); /* Leave: Slide out to the left */
}
</style>
