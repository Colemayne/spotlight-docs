<template>
 <div class="sp-container">
   <div class="sp-card default-padding">
     <div class="content-width">
       <h1 class="display-3">{{ service.name }}</h1>
       <p class="date-text overline" style="margin-top: 10px;">Last Updated: {{ service.dateLastUpdated }}</p>
       <pre class="body-1">{{ service.description }}</pre>
       <Note v-if="service.notes.length > 0" :notes="service.notes"/>
       <ContentSpacer />
       <!-- ENDPOINTS -->
       <div v-for="endpoint in service.endpoints">
         <h2>{{ endpoint.name }}</h2>
         <p class="body-1" style="margin-bottom: 5px;">{{ endpoint.path }}</p>
         <Tag v-if="endpoint.public" style="background:#7841bf;" word="Public" />
         <Tag v-else word="Internal Only" style="background:#bf4141;" />
         <Tag :word="endpoint.method" />
         <Tag v-if="endpoint.contentType && endpoint.contentType != 'N/A'" style="background:#bf8041;" :word="endpoint.contentType" />
         <Tag v-if="endpoint.auth" style="background:#335c2c;" word="Authentication Required" />
         <Tag v-else style="background:#bf4141;" word="No Authentication Required" />
         <pre class="body-1" style="margin-bottom: 16px;">{{ endpoint.description }}</pre>
         <!-- PARAMETERS -->
         <span v-if="endpoint.usesParameters && endpoint.parameters.length > 0">
           <h4>Parameters</h4>
           <div class="parameter-container" v-for="parameter in endpoint.parameters">
             <p class="subtitle-1" style="margin-bottom: 0px;">{{ parameter.name }}</p>
             <Tag :word="parameter.type" />
             <Tag v-if="parameter.required" style="background:#bf8041;" word="Required"/>
             <Tag v-else style="background:#7841bf;" word="Optional"/>
             <span v-if="parameter.sampleValue">
               <p class="subtitle-2" style="margin-bottom:0px;">
                 Sample value: <span style="color:#2a69b0;font-weight:bold;">{{ parameter.sampleValue }}</span>
               </p>
             </span>
             <span v-if="parameter.note">
               <pre class="body-2">{{ parameter.note  }}</pre>
             </span>
           </div>
           <div style="height: 12px;" />
         </span>
         <!-- HEADERS -->
         <span v-if="endpoint.requiresHeaders && endpoint.headers.length > 0">
           <h4>Headers</h4>
           <div class="parameter-container" v-for="parameter in endpoint.headers">
             <p class="subtitle-1" style="margin-bottom: 0px;">{{ parameter.name }}</p>
             <Tag :word="parameter.type" />
             <Tag v-if="parameter.required" style="background:#bf8041;" word="Required"/>
             <Tag v-else style="background:#7841bf;" word="Optional"/>
             <span v-if="parameter.sampleValue">
               <p class="subtitle-2" style="margin-bottom:0px;">
                 Sample value: <span style="color:#2a69b0;font-weight:bold;">{{ parameter.sampleValue }}</span>
               </p>
             </span>
             <span v-if="parameter.note">
               <pre class="body-2">{{ parameter.note  }}</pre>
             </span>
           </div>
           <div style="height: 12px;" />
         </span>
         <!-- RESPONSE STRUCTURE -->
         <span v-if="endpoint.responseStructure && endpoint.responseStructure.length > 0">
           <h4>Response Structure</h4>
           <div class="parameter-container" v-for="response in endpoint.responseStructure">
            <p class="subtitle-1" style="margin-bottom: 0px;">{{ response.name }}</p>
            <Tag :word="response.type" />
            <pre v-if=response.description class="body-2">{{ response.description }}</pre>
           </div>
         </span>
         <!-- RESPONSE STRUCTURE JSON -->
         <span v-if="endpoint.responseStructureJson">
           <h4>Response Structure</h4>
           <div class="parameter-container">
             <pre class="body-2">{{ endpoint.responseStructureJson }}</pre>
           </div>
         </span>
         <!-- CURLS -->
         <span v-if="endpoint.curls.length > 0" v-for="curl in endpoint.curls">
           <h4>Sample Curl Commands</h4>
            <pre class="body-2">{{ curl.description }}</pre>
            <div class="code-container">
              <div class="code-side" />
              <pre class="subtitle-2">{{ curl.curl }}</pre>
            </div>
         </span>
         <!-- SET UP -->
         <span v-if="endpoint.setup.length > 0">
           <h4>Setup Steps</h4>
           <p style="margin-bottom: 0px;">In order to set up a call to this endpoint. Do the following.</p>
           <div class="parameter-container" v-for="(step,index) in endpoint.setup">
             <pre class="body-2">{{ index+1 }}: {{ step.content }}</pre>
           </div>
         </span>
         <ContentSpacer />
       </div>
       <ContentSpacer />
     </div>
   </div>
 </div>
</template>

<script>
// --- Components ---------
import ContentSpacer from '@/components/spacers/ContentSpacer'
import Note from '@/components/notes/Notes'
import Tag from '@/components/tag/Tag'
// --- Services -----------
import sampleService from '@/content/services/Sample'
import sampleService2 from '@/content/services/Sample2'
import sampleService3 from '@/content/services/Sample3'
export default {
  data:() => ({
    service: {},
  }),
  components: {
    ContentSpacer,
    Note,
    Tag,
  },
  created() {
    this.selectService();
  },
  methods:{
    selectService: function() {
      let service = this.$route.params.service;

      // switch statement for choosing which service to load.
      switch (service) {
        case 'sample':
          this.service = sampleService;
          break;
        case 'sample2':
          this.service = sampleService2;
          break;

        case 'sample3':
          this.service = sampleService3;
          break;
      }
    }
  },
  watch: {
    '$route.params.service': function() {
      this.selectService();
    }
  }
}
</script>

<style>
.content-width {
  width: 70%;
  min-width: 700px;
}
.sp-card {
  color: #132d4a;
}
.date-text {
  color: #07111c;
}
.auth-container {
  position: relative;
  min-height: 10px;
  min-width: 40px;
  background: #242e42;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
}
.parameter-container {
  min-height: 10px;
  width: 100%;
  background: rgba(30,30,30,0.1);
  box-sizing: border-box;
  padding: 8px 15px;
  margin-bottom: 8px;
}
.code-container {
  position: relative;
  min-height: 10px;
  width: 100%;
  background: rgba(50,50,50,0.9);
  box-sizing: border-box;
  padding: 8px 15px;
  color: white;
  margin-bottom: 8px;
}
.code-side {
  position: absolute;
  height: 100%;
  width: 5px;
  background:#2474bf;
  top: 0;
  left: 0;
}
</style>