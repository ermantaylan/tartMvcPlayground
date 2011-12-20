#!/bin/bash

#usage : scripts/build.sh
#--compiler_flags="--formatting=PRETTY_PRINT" \

namespace=$1
outputFile=$2
public/js/library/tartJS/tools/goog/build/closurebuilder.py \
--root=public/js/ \
--namespace="ply.api" \
--output_mode=compiled \
--output_file=public/js/compiled/playstore-api.js \
--compiler_jar=public/js/library/tartJS/tools/goog/compiler/compiler.jar \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
--compiler_flags="--output_wrapper='(function(){%output%})()'" \
--compiler_flags="--create_source_map='public/js/compiled/drupal_source_map.js'" \
--compiler_flags="--property_map_output_file='public/js/compiled/drupal_properties.out'" \
--compiler_flags="--variable_map_output_file='public/js/compiled/drupal_variables.out'" \
--compiler_flags="--warning_level=VERBOSE" \
--compiler_flags="--externs=public/js/library/tartJS/tart/externs/jquery-1.4.4.externs.js" \
--compiler_flags="--externs=public/js/library/tartJS/tart/externs/tart.externs.js" \
--compiler_flags="--externs=public/js/library/tartJS/tart/externs/jasmine.externs.js" \
--compiler_flags="--externs=public/js/ply/externs/ply.externs.js" \
--compiler_flags="--define=EXPORTPLY=true" \
--compiler_flags="--jscomp_error=accessControls" \
--compiler_flags="--jscomp_error=checkRegExp" \
--compiler_flags="--jscomp_error=checkTypes" \
--compiler_flags="--jscomp_error=checkVars" \
--compiler_flags="--jscomp_error=invalidCasts" \
--compiler_flags="--jscomp_error=missingProperties" \
--compiler_flags="--jscomp_error=nonStandardJsDocs" \
--compiler_flags="--jscomp_error=strictModuleDepCheck" \
--compiler_flags="--jscomp_error=undefinedVars" \
--compiler_flags="--jscomp_error=unknownDefines" \
--compiler_flags="--jscomp_error=visibility"
